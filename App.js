import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './nav/Navigation'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  )
}

