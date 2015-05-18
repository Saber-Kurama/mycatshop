import React from 'react';
import Product from './product';
import catData from '../cat-data';
import url from '../url';

const ProductList = React.createClass({

	render(){
		const NUM_CATS = 6;

		//cheap cats :)
		const LOW_PRICE = 0.00008;
		const HIGH_PRICE = 0.0008;

		const cats = catData.getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE);

		let urlcats = url.getCatsFromUrlConfig();

		//this.props.data = [1,1,1,1,1,1,1,1,1,,1,1,1,1];
		let productNodes = cats.map(function(product){
			return (
				<Product key={product.id} product={product} />
			);
		});
		return (
			<div className="container" style={{padding:'10px'}}>
				<div className='row'>
					{productNodes}
				</div>
			</div>
		);
	}
//					{urlcats.length ? <BoughtModalTrigger /> : <span/> }

});
export default ProductList;
