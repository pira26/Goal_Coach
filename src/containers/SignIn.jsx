import React, { Component } from 'react';
import { Link } from 'react-router';

import { firebaseApp } from '../firebase';

export default class SignIn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			err: {
				message: ''
			}
		}
	}

	signIn() {
		console.log('log in !!!!!!!!!!!', this.state);
		const { email, password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(err => {
				this.setState({err});
			})
	}

	render() {
		return (
		    <div className="form-inline"
		    	 style={{margin:'5%'}}>
		      	
		      	<h2>Sign In</h2>

		      	<div className="form-group">
		      		<input type="text" 
		      			   placeholder="Email" 
		      			   className="form-control" 
		      			   onChange={e => this.setState({email: e.target.value})}
		      			   style={{marginRight:'5px'}} />

		      		<input type="password"
		      			   placeholder="Password" 
		      			   className="form-control"
		      			   onChange={e => this.setState({password: e.target.value})}
		      			   style={{marginRight:'5px'}} />

		      		<button type="button"
		      				className="btn btn-primary"
		      				onClick={() => this.signIn()}>Sign In</button>
		      	</div>

		      	<div>{this.state.err.message}</div>

		      	<div><Link to="/signup">SingUp instead</Link></div>

		    </div>
		);
	}
}