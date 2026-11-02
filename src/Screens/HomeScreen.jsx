import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

export default function HomeScreen({ navigation }) {
  // 6 Main Categories
  const categories = [
    {
      title: 'Fruits',
      key: 'Fruits',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Vegetables',
      key: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Dairy',
      key: 'Dairy',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Snacks',
      key: 'Snacks',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Beauty',
      key: 'Beauty',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=200&auto=format&fit=crop',
    },
    {
      title: 'Electronics',
      key: 'Electronics',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=200&auto=format&fit=crop',
    },
  ];

  // Sample items per section for Home screen preview
  const fruitsData = [
    {
      id: 'f1',
      name: 'Fresh Apple',
      category: 'Fruits',
      price: '₹149',
      unit: 'kg',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f2',
      name: 'Robusta Banana',
      category: 'Fruits',
      price: '₹60',
      unit: 'dozen',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f3',
      name: 'Nagpur Orange',
      category: 'Fruits',
      price: '₹99',
      unit: 'kg',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f4',
      name: 'Alphonso Mango',
      category: 'Fruits',
      price: '₹249',
      unit: 'kg',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=300&auto=format&fit=crop',
    },
  ];

  const dairyData = [
    {
      id: 'd1',
      name: 'Amul Taaza Milk',
      category: 'Dairy',
      price: '₹27',
      unit: '500ml',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'd2',
      name: 'Amul Butter',
      category: 'Dairy',
      price: '₹58',
      unit: '100g',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'd3',
      name: 'Malai Paneer',
      category: 'Dairy',
      price: '₹95',
      unit: '200g',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=300&auto=format&fit=crop',
    },
  ];

  const vegData = [
    {
      id: 'v1',
      name: 'Fresh Potato',
      category: 'Vegetables',
      price: '₹35',
      unit: 'kg',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'v2',
      name: 'Hybrid Tomato',
      category: 'Vegetables',
      price: '₹40',
      unit: 'kg',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'v3',
      name: 'Red Onion',
      category: 'Vegetables',
      price: '₹45',
      unit: 'kg',
      rating: '4.4',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=300&auto=format&fit=crop',
    },
  ];

  const snacksData = [
    {
      id: 's1',
      name: "Lay's Salted",
      category: 'Snacks',
      price: '₹20',
      unit: 'pack',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 's2',
      name: 'Kurkure Masala',
      category: 'Snacks',
      price: '₹20',
      unit: 'pack',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 's3',
      name: 'Bhujia Sev',
      category: 'Snacks',
      price: '₹55',
      unit: '200g',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=300&auto=format&fit=crop',
    },
  ];

  const electronicsData = [
    {
      id: 'e1',
      name: 'Type-C Cable',
      category: 'Electronics',
      price: '₹199',
      unit: '1m',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'e2',
      name: 'boAt Earbuds',
      category: 'Electronics',
      price: '₹999',
      unit: 'pair',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop',
    },
  ];

  // Helper function to render a product section
  const renderProductSection = (title, categoryKey, items) => (
    <View className="mt-6">
      {/* Section Header with See More */}
      <View className="px-5 mb-3 flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-900">{title}</Text>
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => navigation?.navigate('Catalog', { category: categoryKey })}>
          <Text className="text-xs font-bold text-[#0C8A3C] mr-1">See more</Text>
          <Icon name="arrow-right" size={14} color="#0C8A3C" />
        </TouchableOpacity>
      </View>

      {/* Horizontal List of Products */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => navigation?.navigate('ProductDetails', { product: item })}
            className="w-36 bg-white border border-green-100 rounded-xl p-2 mr-3 shadow-xs">
            <View className="w-full h-24 rounded-xl bg-green-50/40 items-center justify-center overflow-hidden ">
              <Image
                source={{ uri: item.image }}
                className="w-full h-20"
                resizeMode="cover"
              />
            </View>
            <Text className="text-xs font-bold text-gray-900" numberOfLines={1}>
              {item.name}
            </Text>
            <Text className="text-[11px] font-semibold text-gray-800 mt-0.5">
              {item.price}
              <Text className="text-[10px] text-gray-400 font-normal">/{item.unit}</Text>
            </Text>
            <TouchableOpacity
              className="mt-2.5 w-full bg-green-50 border border-[#0C8A3C]/40 py-1.5 rounded-lg items-center"
              onPress={() => navigation?.navigate('ProductDetails', { product: item })}>
              <Text className="text-[11px] font-bold text-[#0C8A3C]">ADD</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Scrollable Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}>
        
        {/* Top Header: Location & Notification */}
        <View className="flex-row items-center justify-between px-5 pt-3 pb-2">
          <TouchableOpacity className="flex-row items-center">
            <Icon name="map-marker" size={24} color="#0C8A3C" />
            <View className="ml-1.5">
              <Text className="text-xs text-gray-400 font-medium">Deliver to</Text>
              <View className="flex-row items-center">
                <Text className="text-base font-bold text-gray-900">Home</Text>
                <Icon name="chevron-down" size={18} color="#111827" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Notification Button */}
          <TouchableOpacity className="w-11 h-11 rounded-full bg-gray-50 border border-gray-100 items-center justify-center shadow-sm">
            <Icon name="bell-outline" size={22} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Top Promo Banner */}
        <View className="px-5 my-3">
          <View className="bg-[#F8CB1D] rounded-3xl p-5 flex-row items-center justify-between overflow-hidden shadow-sm">
            <View className="flex-1 pr-2">
              <Text className="text-3xl font-black tracking-tight text-black">
                Shop<Text className="text-[#0C8A3C]">more</Text>
              </Text>
              <Text className="text-xs font-semibold text-gray-800 mt-1">
                India's Last Minute App · 10 Mins Delivery
              </Text>
            </View>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=300&auto=format&fit=crop' }}
              className="w-24 h-24 rounded-2xl"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Search Bar - Clicking navigates to Catalog */}
        <View className="px-5 my-2">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation?.navigate('Catalog', { category: 'All' })}
            className="flex-row items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14">
            <Icon name="magnify" size={22} color="#9CA3AF" />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-900"
              placeholder="Search for goods..."
              placeholderTextColor="#9CA3AF"
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>

        {/* Quick Category Icons Bar */}
        <View className=" mt-4">
          <Text className="text-base font-bold text-gray-900 mb-3">Shop By Category</Text>
          <View className="flex-row flex-wrap justify-between">
            {categories.map((cat, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => navigation?.navigate('Catalog', { category: cat.key })}
                className="items-center w-[50%] mb-4">
                <View className="w-40 h-20 rounded-2xl bg-green-50 border border-green-100 items-center justify-center mb-1.5 overflow-hidden shadow-xs">
                  <Image source={{ uri: cat.image }} className="w-full h-full" resizeMode="cover" />
                </View>
                <Text className="text-xs font-semibold text-center text-gray-800">
                  {cat.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Section 1: Fresh Fruits */}
        {renderProductSection('Fresh Fruits', 'Fruits', fruitsData)}

        {/* Deal Banner Card */}
        <View className="px-5 mt-6">
          <View className="bg-[#F8CB1D] rounded-3xl p-5 flex-row items-center justify-between overflow-hidden shadow-sm">
            <View className="flex-1">
              <Text className="text-xs font-bold uppercase tracking-wider text-gray-800">Special Offer</Text>
              <Text className="text-3xl font-black text-black tracking-tight my-0.5">Up to 50% OFF</Text>
              <Text className="text-xs text-gray-800 font-medium mt-1">On all fresh organic products</Text>
            </View>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=300&auto=format&fit=crop' }}
              className="w-28 h-20"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Section 2: Daily Dairy & Breakfast */}
        {renderProductSection('Dairy & Breakfast', 'Dairy', dairyData)}

        {/* Section 3: Farm Fresh Vegetables */}
        {renderProductSection('Fresh Vegetables', 'Vegetables', vegData)}

        {/* Section 4: Snacks & Munchies */}
        {renderProductSection('Snacks & Munchies', 'Snacks', snacksData)}

        {/* Section 5: Electronics & Accessories */}
        {renderProductSection('Electronics & Essentials', 'Electronics', electronicsData)}

      </ScrollView>
    </SafeAreaView>
  );
}
