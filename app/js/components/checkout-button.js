import React from 'react';
import CheckoutDialog from './checkout-dialog';
import mui from 'material-ui';
import { productAdded, productRemoved } from './product-event';
let { Dialog } = mui;
const CheckoutButton = React.createClass({
/*	constructor(){
		this.showCheckoutDialog = this.showCheckoutDialog.bind(this);
	},*/
	// 挂载后的方法
/*	componentDidMount(){

	},*/
  getInitialState: function() {
    return {
      products: []
    }
  },

  componentDidMount: function() {
    productAdded.subscribe(this.onProductAdded);
    productRemoved.subscribe(this.onProductRemoved);
  },

  componentWillUnmount: function() {
    productAdded.unsubscribe(this.onProductAdded);
    productRemoved.unsubscribe(this.onProductRemoved);
  },

  onProductAdded: function(event, product) {
    this.setState({
      products: this.state.products.concat(product)
    });
  },

	showCheckoutDialog(){
		console.log('显示对话框');
		console.log(this.refs.dialog.refs);
		this.refs.dialog.refs.dialog.show();
	},
	render(){
		return (
			<div style={{paddingTop:'18px', paddingButtom:'18px'}}>
				<a onClick={this.showCheckoutDialog}>
					<span className="glyphicon glyphicon-shopping-cart"></span>
					<span className="badge">{this.state.products.length}</span>
					<span>Checkout</span>
				</a>
				<CheckoutDialog ref="dialog"/>
			</div>
		);
	}
});
export default CheckoutButton;
