import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import MainTabNavigator from './MainTabNavigator';
import CatalogScreen from '../Screens/CatalogScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';
import AddressScreen from '../Screens/AddressScreen';
import OrderScreen from '../Screens/OrdersScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainTab" component={MainTabNavigator} />
        <Stack.Screen name="Home" component={MainTabNavigator} />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
