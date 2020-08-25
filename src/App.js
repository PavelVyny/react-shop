import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Cart from './pages/Cart';
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
							<Route path='/cart' component={Cart} />
							<Route component={NotFound} />
						</Switch>
					</Container>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
