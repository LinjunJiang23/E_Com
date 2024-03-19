import * as React from 'react';
import { useState } from 'react';

const product = {
			name: "ff14 Drawing",
			title: "ff14 Miqo'te",
			price: 9.99,
			
		};

const getImageUrl = "./2_13.jpg";

const Product = ({index, randomize}) => {
	return (
		<ProductCard index={index} randomize={randomize}/>
	);
}	

const ProductCard = ({ randomize }) => {
const [index, setProductPage] = useState(0);

	const nextProduct = () => {
		if (randomize == true)
		{
			return (
			<>
				<img
					className="summary-image"
					src={getImageUrl}
					alt={product.name}
				/>
				<span className="summary-title">
					{product.title}
				</span>
				<span className="summary-price">
					${product.price}
				</span>
			</>
			);
		}
	};
    return (
		  <div className="product-detail">
			{nextProduct()}
		  </div>
		);
}	

const ProductRow = ({index, randomize}) => {
	return (
	<>
		<li>
			<ProductCard randomize = {randomize}/>
		</li>
		<li>
			<ProductCard randomize = {randomize}/>
		</li>
		<li>
			<ProductCard randomize = {randomize}/>
		</li>
		<li>
			<ProductCard randomize = {randomize}/>
		</li>
		<li>
			<ProductCard randomize = {randomize}/>
		</li>
	</>
	);
}

class ProductGrid extends React.Component {
	render() {
		return (
		<ul className="summary-product-grid">
			<ProductRow 
				randomize = {true}
			/>
		</ul>
		);
	}
}

export default ProductGrid;