/* import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"; */
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Contacts from "./pages/contacts/contacts";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Canimals from "./pages/canimals/catalog";
import Tales from "./pages/tales/catalog";
import Planet from "./pages/planet/catalog";
import Flowers from "./pages/flowers/catalog";
import Gallery from "./pages/gallery/gallery";
import Basket from "./pages/basket/basket";

/* const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PKEY); */

function App() {
  /* useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []); */

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/canimals" element={<Canimals />} />
        <Route path="/tales" element={<Tales />} />
        <Route path="/planet" element={<Planet />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;