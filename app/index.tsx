// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
//import ProfileScreen from '../screens/ProfileScreen';
//import Login from '../screens/login';
import Setting from '../screens/SettingsScreen';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Switch between the screens below for testing */}
    
      
      { <Setting />} 
    </SafeAreaView>
  );
}