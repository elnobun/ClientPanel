// Redux - Firebase import setup
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase';
import 'firebase/firestore';

// configure firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCJhLkvbo2FjLr9iFKsZq_FEghaUU2AGfM',
  authDomain: 'clientpanel-66e9d.firebaseapp.com',
  databaseURL: 'https://clientpanel-66e9d.firebaseio.com',
  projectId: 'clientpanel-66e9d',
  storageBucket: 'clientpanel-66e9d.appspot.com',
  messagingSenderId: '911942528348'
};

// configure react-redux-firebase
const reduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestore
// const firestore = firebase.firestore();

// react-redux-firebase enhancer
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, reduxFirebaseConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Initialze state, and create store.
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// export the store
export default store;
