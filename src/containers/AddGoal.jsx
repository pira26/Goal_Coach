import React, { Component } from 'react';
import { connect } from 'react-redux';

import { goalRef } from '../firebase';

class AddGoal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	addGoal() {
		console.log('this', this);
		const { email } = this.props.user;
		const { title } = this.state;
		goalRef.push({email, title});
	}

	render() {

		return(

			<div className="form-inline">
				
				<div className="grom-group">
					<input type="text"
						   placeholder="Add your Goal"
						   className="form-control"
						   style={{marginRigth:'5px'}}
						   onChange={e => this.setState({title: e.target.value})} />
					
					<button type="button"
							className="btn btn-success"
							onClick={() => this.addGoal()}>Submit</button>

				</div>

			</div>

		);
	}
}

function mapStateToProps(state) {
	const { user } = state; 
	return {
		user
	}
}

export default connect(mapStateToProps, null)(AddGoal);