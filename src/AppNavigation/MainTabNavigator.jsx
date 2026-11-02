import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import Icon from '@react-native-vector-icons/material-design-icons';

import HomeScreen from '../Screens/HomeScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CartScreen from '../Screens/CartScreen';
import AccountScreen from '../Screens/AccountScreen';

const Tab = createBottomTabNavigator();

const renderHomeIcon = ({ color, focused }) => (
  <Icon name={focused ? 'home' : 'home-outline'} size={24} color={color} />
);

const renderCategoriesIcon = ({ color, focused }) => (
  <Icon name={focused ? 'view-grid' : 'view-grid-outline'} size={24} color={color} />
);

const renderCartIcon = ({ color, focused }) => (
  <Icon name={focused ? 'cart' : 'cart-outline'} size={24} color={color} />
);

const renderAccountIcon = ({ color, focused }) => (
  <Icon name={focused ? 'account' : 'account-outline'} size={24} color={color} />
);

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0C8A3C',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarActiveBackgroundColor: 'transparent',
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            android_ripple={{ color: 'transparent' }}
            pressColor="transparent"
            pressOpacity={1}
          />
        ),
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingTop: 1,
          paddingBottom: Platform.OS === 'ios' ? 24 : 10,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#F3F4F6',
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 6,
        },
      }}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: renderHomeIcon }} />
      <Tab.Screen name="CategoriesTab" component={CategoriesScreen} options={{ tabBarLabel: 'Categories', tabBarIcon: renderCategoriesIcon }} />
      <Tab.Screen
        name="CartTab"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: '#EF4444',
            color: '#FFFFFF',
            fontSize: 10,
            fontWeight: 'bold',
            minWidth: 16,
            height: 16,
            lineHeight: 16,
            borderRadius: 8,
          },
          tabBarIcon: renderCartIcon,
        }}
      />
      <Tab.Screen name="AccountTab" component={AccountScreen} options={{ tabBarLabel: 'Account', tabBarIcon: renderAccountIcon }} />
    </Tab.Navigator>
  );
}
