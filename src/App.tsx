import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ApplicationNavigator from './navigators/Application';

export default function App() {
  return (
    <SafeAreaProvider>
      <ApplicationNavigator />
    </SafeAreaProvider>
  );
}
