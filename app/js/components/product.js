import React from 'react';
import mui from 'material-ui';
import {productAdded} from './product-event';
let {RaisedButton} = mui;
let cx = React.addons.classSet;
const Product = React.createClass({
	getInitialState(){
		return {
			addedToCart:false
		};
	},
	addToCart(){
		console.log('添加到购物车');
		this.state.addToCart = true;
		this.setState(this.state);
		productAdded.publish(this.props.product);
	},
	render(){
		let classes = cx({
			'btn': true,
			'btn-success': true,
			'btn-lg': true,
			'btn-hidden': this.state.addedToCart
		});
		return (
			<div className="col-6 col-sm-6 col-lg-4 cat">
				<img src={this.props.product.image} className="img-responsive" />
				<h2>{this.props.product.name}</h2>
				<h4> 此标题 价格</h4>
				{
					this.state.addToCart ?
					<div>已经购买</div> :
					<RaisedButton label="购买" secondary={true} onClick={this.addToCart} />
				}
			</div>

		);
	}
});
export default Product;
