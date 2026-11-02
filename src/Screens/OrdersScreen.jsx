import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

export default function OrdersScreen({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState('All Orders');

  const filters = ['All Orders', 'Processing', 'Delivered', 'Cancelled'];

  const orders = [
    {
      id: 'BK78456231',
      date: 'Placed on 2 Nov, 10:15 AM',
      status: 'Delivered',
      statusColor: 'bg-green-100 text-green-700',
      statusIcon: 'check-circle',
      total: '₹247',
      itemsCount: '6 Items',
      actionText: 'View Details',
      thumbnails: [
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=200&auto=format&fit=crop',
      ],
      extraCount: '+2',
    },
    {
      id: 'BK78452187',
      date: 'Placed on 1 Nov, 07:40 PM',
      status: 'Out for Delivery',
      statusColor: 'bg-amber-100 text-amber-700',
      statusIcon: 'clock-outline',
      total: '₹189',
      itemsCount: '5 Items',
      actionText: 'Track Order',
      thumbnails: [
        'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&auto=format&fit=crop',
      ],
      extraCount: '+1',
    },
    {
      id: 'BK78448765',
      date: 'Placed on 30 Oct, 08:20 PM',
      status: 'Processing',
      statusColor: 'bg-blue-100 text-blue-700',
      statusIcon: 'clock-outline',
      total: '₹322',
      itemsCount: '7 Items',
      actionText: 'View Details',
      thumbnails: [
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&auto=format&fit=crop',
      ],
      extraCount: '+3',
    },
    {
      id: 'BK78447621',
      date: 'Placed on 29 Oct, 06:12 PM',
      status: 'Cancelled',
      statusColor: 'bg-red-100 text-red-700',
      statusIcon: 'close-circle',
      total: '₹118',
      itemsCount: '4 Items',
      actionText: 'View Details',
      thumbnails: [
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&auto=format&fit=crop',
      ],
      extraCount: '+1',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Scrollable Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}>

        {/* Top Header: Logo & Icons */}
        <View className="flex-row items-center justify-between px-5 pt-3 pb-2">
          {/* Logo */}
          <Text className="text-3xl font-black tracking-tight text-black">
            Shop<Text className="text-[#0C8A3C]">more</Text>
          </Text>

          {/* Right Header Icons */}
          <View className="flex-row items-center">
            {/* Notification */}
            <TouchableOpacity className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 items-center justify-center relative mr-2">
              <Icon name="bell-outline" size={20} color="#111827" />
              <View className="absolute top-1.5 right-1.5 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
                <Text className="text-[10px] font-bold text-white">2</Text>
              </View>
            </TouchableOpacity>

            {/* Profile */}
            <TouchableOpacity className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center">
              <Icon name="account" size={22} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Title & Subtitle */}
        <View className="px-5 mt-2 mb-4">
          <Text className="text-2xl font-extrabold text-gray-900">My Orders</Text>
          <Text className="text-sm text-gray-500 mt-0.5">Track, manage and view your orders</Text>
        </View>

        {/* Filter Tabs */}
        <View className="px-5 mb-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {filters.map((filter) => {
              const isSelected = selectedFilter === filter;
              return (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setSelectedFilter(filter)}
                  className={`flex-row items-center px-4 py-2.5 rounded-full mr-2.5 border ${
                    isSelected
                      ? 'bg-[#0C8A3C] border-[#0C8A3C]'
                      : 'bg-white border-gray-200'
                  }`}>
                  <Icon
                    name={
                      filter === 'All Orders'
                        ? ''
                        : filter === 'Processing'
                        ? 'clock-outline'
                        : filter === 'Delivered'
                        ? 'check-circle'
                        : 'close-circle'
                    }
                    size={16}
                    color={isSelected ? '#ffffff' : '#4B5563'}
                  />
                  <Text
                    className={`ml-1.5 text-xs font-bold ${
                      isSelected ? 'text-white' : 'text-gray-700'
                    }`}>
                    {filter}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Orders List */}
        <View className="px-5">
          {orders.map((order, idx) => (
            <View
              key={idx}
              className="bg-green-50 border border-green-200 rounded-3xl p-4 mb-4 shadow-md">
              
              {/* Top Row: Bag Image / ID + Status */}
              <View className="flex-row items-start justify-between border-b border-gray-100 pb-3">
                <View className="flex-row items-center">
                  <View className="w-14 h-14 bg-amber-50 rounded-full items-center justify-center mr-3 border border-amber-100">
                    <Image
                      source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop' }}
                      className="w-full h-full rounded-full"
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text className="text-base font-extrabold text-gray-900">
                      Order #{order.id}
                    </Text>
                    <Text className="text-xs text-gray-500 mt-0.5 font-medium">
                      {order.date}
                    </Text>
                  </View>
                </View>

                {/* Status Badge */}
                <View className={`flex-row items-center px-3 py-1.5 rounded-full ${order.statusColor.split(' ')[0]}`}>
                  <Icon
                    name={order.statusIcon}
                    size={14}
                    color={
                      order.statusColor.includes('green')
                        ? '#15803d'
                        : order.statusColor.includes('amber')
                        ? '#b45309'
                        : order.statusColor.includes('blue')
                        ? '#1d4ed8'
                        : '#b91c1c'
                    }
                  />
                  <Text className={`ml-1 text-xs font-bold ${order.statusColor.split(' ')[1]}`}>
                    {order.status}
                  </Text>
                </View>
              </View>

              {/* Middle Row: Item Thumbnails */}
              <View className="flex-row items-center my-3 py-1">
                <View className="flex-row items-center">
                  {order.thumbnails.map((thumb, i) => (
                    <View key={i} className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl overflow-hidden mr-2">
                      <Image source={{ uri: thumb }} className="w-full h-full" resizeMode="cover" />
                    </View>
                  ))}
                </View>
                {order.extraCount && (
                  <View className="w-11 h-11 bg-gray-100 rounded-xl items-center justify-center">
                    <Text className="text-xs font-bold text-gray-600">{order.extraCount}</Text>
                  </View>
                )}
              </View>

            {/* Bottom Row: Total & Action Button */}
              <View className="flex-row items-center justify-between pt-2 border-t border-gray-100">
                <Text className="text-sm font-bold text-gray-900">
                  {order.total} <Text className="text-gray-400 font-normal">•</Text> <Text className="text-gray-500 font-normal">{order.itemsCount}</Text>
                </Text>

                <TouchableOpacity className="flex-row items-center border border-[#0C8A3C] px-4 py-2 rounded-xl">
                  <Text className="text-xs font-bold text-[#0C8A3C] mr-1">{order.actionText}</Text>
                  <Icon name="chevron-right" size={14} color="#0C8A3C" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View className="px-5 mt-2">
          <View className="bg-green-50 border border-green-200 rounded-2xl p-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-green-50 items-center justify-center mr-3">
                <Icon name="headset" size={20} color="#0C8A3C" />
              </View>
              <View>
                <Text className="text-sm font-bold text-gray-900">Need Help?</Text>
                <Text className="text-xs text-gray-500 mt-0.5">Get help with your orders</Text>
              </View>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-xs font-bold text-[#0C8A3C] mr-1">Contact Us</Text>
              <Icon name="chevron-right" size={14} color="#0C8A3C" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}