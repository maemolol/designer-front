import './home.css';
import flowersImage from '../../assets/home/flowers.png';

function Home() {
  return (
    <div class="home">
      <p class="home-title">Olga Sarukhanova</p>
      <div class="sub-header">
        <div class="home-menu">
          <a href="/gallery"><p class="menu-option">gallery</p></a>
          <a href="/about"><p class="menu-option">about</p></a>
          <a href="/contacts"><p class="menu-option">contacts</p></a>
        </div>
        <img src={flowersImage} alt="flower painting" class="home-painting" />
      </div>
    </div>
  );
}

export default Home;
