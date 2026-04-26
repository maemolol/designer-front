import "./footer.css";
import homeIcon from "../../assets/footer/home-icon.png";
import basketIcon from "../../assets/footer/basket-icon.png";
import { getBasket } from "../basket/basket";

function Footer() {
	const basket = getBasket();

	return(
		<div class="footer">
			<a href="/"><img src={homeIcon} alt="home button" class="home-icon" /></a>
			{basket.items.length > 0 && <a href="/basket"><img src={basketIcon} alt="basket icon" class="basket-icon" /></a>}
			<p class="basket-length">{basket.items.length}</p>
		</div>
	);
}

export default Footer;
