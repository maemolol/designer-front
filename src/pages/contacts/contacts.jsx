import "./contacts.css";
import facebookLogo from '../../assets/icons/facebook.png';
import instagramLogo from "../../assets/icons/instagram.png";

function Contacts() {

    return (
        <div className="contact">
            <title>Contacts</title>
			<p class="contacts-title">Contacts</p>
			<div class="contacts-icons">
				<a href="https://www.facebook.com/profile.php?id=100034058891404"><img src={facebookLogo} alt="facebook" class="contacts-icon" /></a>
				<a href="https://instagram.com/olga_sarukhanova"><img src={instagramLogo} alt="instagram" class="contacts-icon" /></a>
			</div>
        </div>
    );
}

export default Contacts;
