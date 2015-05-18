//import React from 'react';
import React from 'react';
import Router from 'react-router';
import routes from './routes';

//创建路由
Router
	.create({
		routes,
		scrollBehavior: Router.ScrollToTopBehavior
	})
	.run((Handler)=>{
		React.render(<Handler/>, document.querySelector('.app'));
	});
