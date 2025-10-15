import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { CattleProvider } from './src/context/CattleContext';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <AuthProvider>
      <CattleProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <AppNavigator />
        </NavigationContainer>
      </CattleProvider>
    </AuthProvider>
  );
};

export default App;