import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Banner from "./component/Banner";
import Bestoffer from "./component/Bestoffer";
import Gallery from "./component/Gallery";
import NewTrends from "./component/NewTrends";
import Footer from "./component/Footer";
import Product from "./component/product/Product";



function App() {

  return (
    <div className="App">
        <Nav />
        <Hero />
        <Banner />
        <Product/>
        <Bestoffer />
        <Gallery />
        <NewTrends />
        <Footer />
    </div>
  );
}

export default App;
