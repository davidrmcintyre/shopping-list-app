import { StyleSheet, Text, View } from 'react-native';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the screens

import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAzY95OIGw17Ae-MAgy6Wf-mPM3qm7BgP0",
    authDomain: "shopping-list-demo-666e8.firebaseapp.com",
    projectId: "shopping-list-demo-666e8",
    storageBucket: "shopping-list-demo-666e8.appspot.com",
    messagingSenderId: "916624879849",
    appId: "1:916624879849:web:db1f1c8ab09791267d0078"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="ShoppingLists"
      >
        {props => <ShoppingLists db={db} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
