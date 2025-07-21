import "./footer.css";
import homeIcon from "../../assets/footer/home-icon.png";

function Footer() {
  return(
	<div class="footer">
		<a href="/"><img src={homeIcon} alt="home button" class="home-icon" /></a>
	</div>
  );
}

export default Footer;
