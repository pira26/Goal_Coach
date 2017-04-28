import { SIGNED_IN } from '../constants';

let user = {
	email: null
}

export default (state = user, action) => {
	switch(action.type) {
		case SIGNED_IN:
			const { email } = action;
			user = {
				email
			}
			return email;

		default:
			return state;
	}
}