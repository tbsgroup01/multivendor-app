import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

export default function CategoriesScreen({ navigation }) {
  const allCategories = [
    {
      title: 'Fruits',
      key: 'Fruits',
      count: '35+ items',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Vegetables',
      key: 'Vegetables',
      count: '45+ items',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Dairy & Breakfast',
      key: 'Dairy',
      count: '50+ items',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Snacks & Munchies',
      key: 'Snacks',
      count: '60+ items',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Beauty & Personal Care',
      key: 'Beauty',
      count: '40+ items',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Electronics & Essentials',
      key: 'Electronics',
      count: '25+ items',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=200&auto=format&fit=crop',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View className="px-5 pt-4 pb-3 border-b border-gray-100 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-gray-900">All Categories</Text>
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-full bg-gray-50 border border-gray-100"
          onPress={() => navigation?.navigate('Catalog', { category: 'All' })}>
          <Icon name="magnify" size={22} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* Grid of Categories */}
      <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between pb-6">
          {allCategories.map((item) => (
            <TouchableOpacity
              key={item.key}
              activeOpacity={0.75}
              onPress={() => navigation?.navigate('Catalog', { category: item.key })}
              className="w-[48%] bg-green-50/50 border border-green-100 rounded-3xl  mb-4 items-center shadow-xs">
              <View className="w-40 h-40 rounded-2xl bg-white items-center justify-center mb-3 overflow-hidden shadow-xs">
                <Image source={{ uri: item.image }} className="w-full h-full" resizeMode="cover" />
              </View>
              <Text className="text-sm font-bold text-gray-900 text-center" numberOfLines={1}>
                {item.title}
              </Text>
              <Text className="text-xs text-gray-400 mt-1">{item.count}</Text>
              
              <View className="mt-3 bg-white px-3 py-1  rounded-full border border-green-200 flex-row items-center">
                <Text className="text-[11px] font-bold text-[#0C8A3C] mr-0.5">Explore</Text>
                <Icon name="chevron-right" size={14} color="#0C8A3C" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
