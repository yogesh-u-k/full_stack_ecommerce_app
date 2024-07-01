import ProductList from "../product-list/ProductList";
import NavBar from "../navbar/Navbar";
function Home() {
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
      );
}

export default Home;