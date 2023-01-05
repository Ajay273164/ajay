
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
//Screen
import Home from './src/Screens/Home';
import DetailsScreen from './src/Screens/DetailsScreen';
import LeadAdd from './src/Screens/LeadAdd';
import Signin from './src/Screens/Signin';
import SignSecond from './src/Screens/SignSecond';
import Update from './src/Screens/Update';
import Testing from './src/Screens/Testing'
 

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Testing">
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
          <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}  />
          <Stack.Screen name="Signin" component={Signin}  options={{headerShown:false}} />
            <Stack.Screen name="SignSecond" component={SignSecond} options={{headerShown:false}} />
            <Stack.Screen name="LeadAdd" component={LeadAdd} options={{headerShown:false}} />
            <Stack.Screen name="Update" component={Update} options={{headerShown:false}} />
            <Stack.Screen name="Testing" component={Testing} options={{headerShown:false}} />
            
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;