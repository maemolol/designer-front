import "./gallery.css";
import painting1 from "../../assets/gallery/these cute animals.png";
import painting2 from "../../assets/gallery/fairytales.png";
import painting3 from "../../assets/gallery/animal planet.png";
import painting4 from "../../assets/gallery/flowers.png";

function Gallery() {
	return(
		<div class="gallery">
			<p class="gallery-title">Gallery</p>
			<div class="gallery-grid">
				<div class="gallery-row">
					<div class="gallery-element">
						<img src={painting1} alt="painting 1" class="category-painting" />
						<p class="category-name">these cute animals</p>
					</div>
					<div class="gallery-element">
						<img src={painting2} alt="painting 2" class="category-painting" />
						<p class="category-name">fairytales</p>
					</div>
				</div>
				<div class="gallery-row">
					<div class="gallery-element">
						<img src={painting3} alt="painting 3" class="category-painting" />
						<p class="category-name">animal planet</p>
					</div>
					<div class="gallery-element">
						<img src={painting4} alt="painting 4" class="category-painting" />
						<p class="category-name">flowers</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;