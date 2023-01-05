import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { SafeAreaView,  TextInput,TouchableOpacity,Image,Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TabA() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
       <View>
        <Text>ajay</Text>
       </View>
    </View>
    
  );
}
function TabB() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  );
}
function TabC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function ReactNavigationBottomTabs() {
  return (
    <Tab.Navigator 
     
    >
      <Tab.Screen 
       headershow={false}
        name='Tab A'
        component={TabA}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
    
      />
      <Tab.Screen
        name='Tab B'
        component={TabB}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='message' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Tab C'
        component={TabC}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});