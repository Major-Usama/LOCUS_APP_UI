import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Screens/Welcome';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import InterestsScreen from '../Screens/InterestsScreen'
import PasswordResetScreen from '../Screens/PasswordResetScreen';
import PasswordResetScreen2 from '../Screens/PasswordResetScreen2';


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';







import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import GeneralCategoryScreen from '../Screens/GeneralCategoryScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import EditScreen from '../Screens/EditScreen';
import CategoryClickScreen from '../Screens/CategoryClickScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    lazy={false}

    tabBarOptions={{
      activeTintColor: '#6644CC',
      inactiveTintColor: '#757575',
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#fff',


      tabStyle:
      {
        justifyContent: 'center',
        paddingTop: 15,

      }
    }}
    >
      <Tab.Screen 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={20} color={color} />
        ),
      }}
      name="HoomeScreen" component={HomeScreen} />

      <Tab.Screen 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="compass" size={20} color={color} />
        ),
      }}
      name="GeneralCategoryScreen" component={GeneralCat} />


<Tab.Screen 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="hearto" size={20} color={color} />
        ),
      }}
      name="FavoriteScreen" component={FavoriteScreen} />



<Tab.Screen 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={20} color={color} />
        ),
      }}
      name="EditScreen" component={EditScreen} />
    </Tab.Navigator>
  );
}





const Stack = createStackNavigator();
const Stack2 = createStackNavigator();




function GeneralCat() {
  return (
    <NavigationContainer independent={true}>
      <Stack2.Navigator headerMode="none" >
      <Stack2.Screen name="GeneralCategoryScreen" component={GeneralCategoryScreen} />
        <Stack2.Screen name="CategoryClickScreen" component={CategoryClickScreen} />
    
       
      </Stack2.Navigator>
    </NavigationContainer>
  );
}


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={Welcome}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={MyTabs} />
        <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen} />
        <Stack.Screen name="PasswordResetScreen2" component={PasswordResetScreen2} />
        <Stack.Screen name="CategoryClickScreen" component={CategoryClickScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="InterestsScreen" component={InterestsScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;