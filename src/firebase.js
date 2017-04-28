import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCvAy_yMNc9W3uaUOEeW5S7LAIaS3D6m1k",
    authDomain: "goal-coach-af2f9.firebaseapp.com",
    databaseURL: "https://goal-coach-af2f9.firebaseio.com",
    projectId: "goal-coach-af2f9",
    storageBucket: "goal-coach-af2f9.appspot.com",
    messagingSenderId: "629640767342"
};

export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');