import { combineReducers } from 'redux';

import user from './userReducer';
import goals from './goalsReducer';
import completeGoals from './completedGoalsReducer';

export default combineReducers({
	user,
	goals,
	completeGoals 
})