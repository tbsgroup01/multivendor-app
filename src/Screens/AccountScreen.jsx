import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

export default function AccountScreen({ navigation }) {
  const menuItems = [
    { title: 'My Orders', icon: 'shopping-outline' },
    { title: 'Saved Addresses', icon: 'map-marker-outline' },
    { title: 'Payment Methods', icon: 'credit-card-outline' },
    { title: 'Notifications', icon: 'bell-outline' },
    { title: 'Help & Support', icon: 'help-circle-outline' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View className="bg-green-50 border border-green-200 rounded-3xl p-5 flex-row items-center mb-6 shadow-sm">
          <View className="w-16 h-16 rounded-full bg-[#0C8A3C] items-center justify-center mr-4">
            <Icon name="account" size={36} color="#ffffff" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-bold text-gray-900">Guest User</Text>
            <Text className="text-xs text-gray-500 mt-0.5">+91 98765 43210</Text>
            <Text className="text-xs font-semibold text-[#0C8A3C] mt-1">Shopmore Club Member</Text>
          </View>
        </View>

        {/* Menu list */}
        <View className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-6 shadow-sm">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (item.title === 'Saved Addresses') {
                  navigation?.navigate('Address');
                }
                else if(item.title === 'My Orders'){
                  navigation?.navigate('Order');
                }
              }}
              className={`flex-row items-center justify-between p-4 ${index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <View className="flex-row items-center">
                <Icon name={item.icon} size={22} color="#0C8A3C" />
                <Text className="text-sm font-semibold text-gray-800 ml-3">{item.title}</Text>
              </View>
              <Icon name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          className="flex-row items-center justify-center p-4 border border-red-200 rounded-2xl bg-red-50/50 mb-10"
          onPress={() => navigation?.navigate('Login')}>
          <Icon name="logout" size={20} color="#DC2626" />
          <Text className="text-sm font-bold text-red-600 ml-2">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
