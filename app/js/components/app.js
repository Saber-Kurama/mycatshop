import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';
import CheckoutButton from './checkout-button';

let { AppBar, AppCanvas, Menu, IconButton, Toolbar, ToolbarGroup, ToolbarTitle} = mui;


const TopBarContent = React.createClass({
	render(){
		return (
			<div className="container">
				<div className="navbar-header">
					<a href="" className="navbar-brand">3333eeeee</a>
					</div>
			</div>
		);
	}
});

let RouteHandler = Router.RouteHandler;
const App = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	render(){
		console.log(this.context.router.getCurrentPathname());
		let pathname = this.context.router.getCurrentPathname();
		let toolbarStyle = {
			//height:'64px',
			backgroundColor:'#00bcd4'
		};
		let elemetleft = (
				<Toolbar className={'saber'} style={{height:'64px', color:'red', backgroundColor:'red'}} >1saber123222333</Toolbar>
			);
		return (
			<AppCanvas>
				<Toolbar className={'saber-toolbar'} >
					<ToolbarGroup key={0} float="left">
						<div className="container">
							<div className="navbar-header">
								<a href="/" className="navbar-brand">猫儿商店</a>
							</div>
							<div className="collapse navbar-collapse">
								<ul className="nav navbar-nav">
									<li><a href="/" className={pathname==='/'||pathname==='/home'?'active':''} >首页</a></li>
									<li><a href="#/about" className={pathname==='/about'?'active':''} >关于</a></li>
								</ul>
								<ul className="nav navbar-nav navbar-right">
									<li><CheckoutButton /></li>
									<li><a href="https://www.coinbolt.com">Return to Coinbolt</a></li>
								</ul>
							</div>
						</div>
					</ToolbarGroup>
				</Toolbar>
				<RouteHandler />
			</AppCanvas>
		);
	}
});
export default App;
