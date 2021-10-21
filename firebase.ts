import * as firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCx3ktFXTYhA7qnETu38dGyvZzIJMcVIwg',
  authDomain: 'nest-app-3f9ac.firebaseapp.com',
  projectId: 'nest-app-3f9ac',
  databaseURL: 'nest-app-3f9ac.firebaseio.com',
  storageBucket: 'nest-app-3f9ac.appspot.com',
  messagingSenderId: '526547919874',
  appId: '1:526547919874:web:7b210875887a1d16caf31b',
  measurementId: 'G-Y6E3XKSTBL',
};

const app = firebase.default.initializeApp(firebaseConfig);

export {app};
