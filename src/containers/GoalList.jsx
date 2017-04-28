import React, { Component } from 'react';

import { goalRef } from '../firebase';

export default class GoalList extends Component {

	componentDidMount() {
		goalRef.on('value', snap => {
			let goals = [];
			snap.forEach(goal => {
				// let goalObject = goal.val();
				// console.log("goalObject", goalObject);
				//goals.push(goalObject);
				const { email, title } = goal.val();
				goals.push({ email, title });
				console.log("goals", goals);
			})
		})
	}

	render() {

		return(

			<div>Goal List</div>
		);
	}
}