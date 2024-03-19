import logo from './logo.svg';
import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart'

function Main() {
	return (
	<>
	  <>
		<div className="header">
			<a 
				href="./index.html"
				classType="nav_logo"
			>
				<div className="logo">
					<img 
						src={logo} 
						alt="logo" 
					/>
				</div>
			</a>
			<div className="search-bar">
			  <SearchBar />
			</div>
			<div className="shopping-cart">
			  { /* Features: 1. When toggled, shows a dropdown displaying the items in cart. */ }
			  <ShoppingCart />
			</div>
		</div>
	  </>
	  <>
		<div className="main-section-view">
			<div className="product-grid">
			  { /*This is the division that showcase product in grid form. */ }
			  <ProductGrid />
			</div>
		</div>
	  </>
	  <>
		<div className="footer">
			<div className="logo"> 
			  <img src={logo} alt="logo" />
			</div>
			<div className="contact">
			  { /* List simple contact info. */ }
			  <>
			    <a href="mailto:jiangl1@appstate.edu">jiangl1@appstate.edu</a>
			    <a href="tel:7042945001">704-294-5001</a>
			  </>
			</div>
		</div>
	  </>
	</>
	);
}
export default Main;	