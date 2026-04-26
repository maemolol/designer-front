import React, { useState, useEffect } from 'react';
import { getBasket, removeFromBasket, clearBasket } from '../../components/basket/basket';
import { loadStripe } from "@stripe/stripe-js";
import './basket.css';

const stripePromise = loadStripe("pk_test_51TJ95D6aFBaMvggQu93elAi5O2Pnl5mUDnPduv1REoiFu5xRZsmBzVayFOBjuXfUsrOb65nMlVidQFl1Ywyockko00laDBJ5Tz");

function Basket() {
    const [loading, setLoading] = useState(true);
    const [paintings, setPaintings] = useState([]);
    const [email, setEmail] = useState("");
    const apiLink = process.env.REACT_APP_BACKEND_URI || "/api";

    async function handleStripeCheckout() {
        const basket = getBasket();

        const response = await fetch(`${apiLink}/pay`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                paintingIds: basket.items
            })
        });

        const data = await response.json();

        window.location.href = data.url;
    }

    useEffect(() => {
        const loadPaintings = async () => {
            const basket = getBasket();

            if (basket.items.length === 0) {
                setLoading(false);
                return;
            }

            try {
                const requests = basket.items.map(id =>
                    fetch(`${apiLink}/paintings/${id}`).then(res => {
                        if (!res.ok) throw new Error("Failed fetch");
                        return res.json();
                    })
                );

                const results = await Promise.all(requests);

                results.forEach(p => {
                    if (p.sold) {
                        removeFromBasket(p.id);
                    }
                });

                const availableIds = results
                    .filter(p => !p.sold)
                    .map(p => p.id);

                localStorage.setItem("basket", JSON.stringify({ items: availableIds }));

                setPaintings(results.filter(p => !p.sold));

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadPaintings();
    }, []);

    /* async function checkout() {
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        try {
            const response = await fetch(`${apiLink}/basket`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    paintingIds: basket.items
                })
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }

            alert("Purchase successful!");

            // clear basket
            localStorage.removeItem("basket");

            // optionally reload page
            window.location.reload();

        } catch (error) {
            console.error(error);
            alert("Checkout failed: " + error.message);
        }
    } */

    return (
        <div class="basket">
            <title>Basket</title>
            <p class="basket-title">Basket</p>
            <div class="basket-main">
                <div class="basket-items">
                    {loading ? (
                        <p class="basket-loading">Loading basket...</p>
                    ) : (
                        paintings.map(p => (
                            <div class="basket-item" key={p.id}>
                                <p class="basket-name">{p.name}</p>
                                <p class="basket-price">€{p.price}</p>
                                <button class="basket-remove" type="submit" onClick={() => removeFromBasket(p.id)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>
                <input
                    type="text"
                    required
                    className="basket-email"
                    placeholder="E-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="button" class="basket-buy" disabled={loading} onClick={handleStripeCheckout}>Buy now</button>
            </div>
        </div>
    );
}

export default Basket;