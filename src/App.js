import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import MyProducts from './pages/MyProducts';
import Cart from './pages/Cart';
import ProductItem from './pages/ProductItem';
import NotFound from './pages/NotFound';
import Header from './components/globalComponents/Header';

import store from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header />
					<Container>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/filters&origin=:arr&priceRange=:urlRangePrice' component={Home} />
							<Route path='/cart' component={Cart} />
							<Route path='/my-products' component={MyProducts} />
							<Route path='/product/:id' component={ProductItem} />
							<Route component={NotFound} />
						</Switch>
					</Container>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
