# Shopping List App

This is a simple shopping list app built using React Native. It allows users to manage their shopping lists and items. The app integrates Firebase for authentication and Firestore for data storage.

## Features

### Authentication: 
Users can sign up and log in to the app using their email and password.

### Shopping Lists: 
Users can create multiple shopping lists and manage their items.

### Real-time Updates: 
Any changes made to the shopping lists or items will be instantly synced across devices.

## Dependencies

The app uses the following dependencies:

react
react-native
@react-navigation/native
@react-navigation/native-stack
firebase/app
firebase/firestore
react-native-gesture-handler

## Components

### Welcome

The Welcome component is displayed when the app starts. It allows users to sign in anonymously by clicking the "Get started" button. Upon successful sign-in, it navigates to the ShoppingLists component.

### ShoppingLists

The ShoppingLists component displays the user's shopping lists and provides a form to create new lists. It retrieves the lists from Firestore and listens for real-time updates. Users can enter a list name and add items to the list. The component uses Firebase Firestore to store and retrieve data.

### Styles

The app uses a set of predefined styles defined in the styles object in each component's file. These styles define the layout and appearance of various UI elements in the app.