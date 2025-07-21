import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Contacts from "./pages/contacts/contacts";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Catalog from "./pages/catalog/catalog";
import Gallery from "./pages/gallery/gallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<Catalog />} />
		<Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;