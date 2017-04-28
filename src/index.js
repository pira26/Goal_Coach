import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { firebaseApp } from './firebase';
import reducer from './reducers';
import { logUser } from './actions';

import App from './App';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';


const store = createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user => {
	if(user){
		//console.log('log in', user);
		const { email } = user;
		store.dispatch(logUser(email));
		browserHistory.push("/app");
	}
	else {
		//console.log('sign out or need to sign in');
		browserHistory.replace("/signin");
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router path="/" history={browserHistory}>
	  		<Route path="/app" component={App} />
	  		<Route path="/signin" component={SignIn} />
	  		<Route path="/signup" component={SignUp} />
  		</Router>
	</Provider>,
  	document.getElementById('root')
);
