import './about.css';
import checkbox from "../../assets/about/checkbox.png";
import painting from "../../assets/about/painting.png";

function About() {
    return (
        <div class="about">
            <p class="about-title">About</p>
			<div class="about-painting-frame">
				<img src={painting} alt="designer with painting" class="about-painting" />
				<p class="about-painting-text">Life is beautiful!</p>
			</div>
			<div class="about-text">
				<p class="about-subtext">The process of creating a painting for me personally is a search, inspiration, emotions and feelings. I try to convey all this on canvas. Often a picture is assembled like a small puzzle from various elements. You choose a composition, a color scheme. The main source of inspiration for me are people and feelings.</p>
				<p class="about-subtext">I work at will, when ideas accumulate in my head that I want to give to the canvas. I can go months without working, and then immediately do a series or several different works. I don’t like sketches; it takes me a long time to build an idea and composition in my head. And then I immediately transfer them to the canvas. My paintings are more of a philosophical nature and are dedicated to the beauty and joy of the world.</p>
			</div>
			<div class="about-achievements">
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Received professional art education at an art school Russia.</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Diploma with honors in Design from Oryol state University Russia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">EventsExposition in the salon "Color Wizards" Riga Latvia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Exhibition in the gallery ART RC Riga Latvia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Exhibition "100 works by 100 Latvian artists" in the gallery Museon Riga Latvia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Exhibition “Flowers” ART gallery Riga Latvia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Exhibition “Art is life”  at Kipsala International Exhibition Center Riga Latvia</p>
				</div>
				<div class="achievement-2">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Exhibition outside of the Masa studio gallery "Pushing the boundaries of the possible" Nosaints cocktail bar Old town Riga Latvia </p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Exhibition "Awakening" gallery Masa-studio Riga Latvia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">International art exhibition “Wings of Riga 2024” Riga Latvia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">Meow Fest 2025 Riga Latvia</p>
				</div>
				<div class="achievement">
					<img src={checkbox} alt="checkmark" class="about-checkbox" />
					<p class="achievement-text">International art exhibition “Wings of Riga 2025” Riga Latvia</p>
				</div>
			</div>
        </div>
    );
}

export default About;
