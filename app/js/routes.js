import React from 'react';
import App from './components/app';
import ProductList from './components/product-list';
import About from './components/about';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;
// 创建路由规则
let routes = (
	<Route name="app" path="/" handler={App} >
		<Route name="home" path="/home" handler={ProductList} />
		<Route name="about" path="/about" handler={About} />
		<DefaultRoute handler={ProductList} />
	</Route>
);
export default routes;
