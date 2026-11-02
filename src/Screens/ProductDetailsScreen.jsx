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

export default function ProductDetailsScreen({ navigation, route }) {
  const product = route?.params?.product || {
    name: 'Fresh Shimla Apple',
    price: '₹149',
    unit: 'kg',
    rating: '4.8',
    reviews: '12k',
    description: 'Fresh and Juicy Apples directly sourced from the best farm orchards.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=500&auto=format&fit=crop',
  };

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Similar items
  const similarProducts = [
    {
      id: '1',
      name: 'Robusta Banana',
      price: '₹60',
      unit: 'dozen',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: '2',
      name: 'Nagpur Orange',
      price: '₹99',
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: '3',
      name: 'Alphonso Mango',
      price: '₹249',
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=300&auto=format&fit=crop',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Main Scrollable View */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}>

        {/* Top Header Buttons */}
        <View className="flex-row items-center justify-between px-5 pt-3 pb-2">
          {/* Back Button */}
          <TouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full bg-gray-50 border border-gray-100 shadow-sm"
            onPress={() => navigation?.goBack()}>
            <Icon name="chevron-left" size={26} color="#111827" />
          </TouchableOpacity>

          {/* Favorite Heart Button */}
          {/* <TouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full bg-gray-50 border border-gray-100 shadow-sm"
            onPress={() => setIsFavorite(!isFavorite)}>
            <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={22}
              color={isFavorite ? '#EF4444' : '#111827'}
            />
          </TouchableOpacity> */}
        </View>

        {/* Product Image */}
        <View className="items-center justify-center my-4 px-6">
          <Image
            source={{ uri: product.image }}
            className="w-64 h-64"
            resizeMode="contain"
          />
        </View>

        {/* Product Details Section */}
        <View className="px-6 mt-2">
          {/* Title */}
          <Text className="text-2xl font-extrabold text-gray-900">{product.name}</Text>

          {/* Price & Unit */}
          <View className="flex-row items-baseline mt-1">
            <Text className="text-2xl font-bold text-gray-900">{product.price}</Text>
            <Text className="text-base text-gray-500 font-medium ml-1">/{product.unit}</Text>
          </View>

          {/* Rating & Reviews */}
          <View className="flex-row items-center mt-2">
            <Icon name="star" size={18} color="#F59E0B" />
            <Text className="text-sm font-bold text-gray-900 ml-1">{product.rating || '4.5'}</Text>
            <Text className="text-xs text-gray-400 ml-1.5 font-medium">({product.reviews || '5k'} reviews)</Text>
          </View>

          {/* Description */}
          <Text className="text-sm text-gray-500 mt-4 leading-relaxed font-normal">
            {product.description || 'Fresh and high quality products delivered directly to your doorstep in 10 minutes.'}
          </Text>

          {/* Quantity Selector Counter */}
          <View className="mt-6 flex-row items-center">
            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2">
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 items-center justify-center rounded-xl bg-white shadow-xs">
                <Icon name="minus" size={18} color="#111827" />
              </TouchableOpacity>

              <Text className="text-base font-bold text-gray-900 px-3">{quantity}</Text>

              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                className="w-8 h-8 items-center justify-center rounded-xl bg-white shadow-xs">
                <Icon name="plus" size={18} color="#111827" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity
            className="w-full h-14 bg-[#0C8A3C] rounded-full items-center justify-center mt-6 shadow-sm"
            activeOpacity={0.85}
            onPress={() => navigation?.navigate('MainTab', { screen: 'CartTab' })}>
            <Text className="text-white text-base font-bold tracking-wide">
              Add to Cart · {product.price}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Similar Products Section */}
        <View className="mt-8 pt-6 border-t border-gray-100 px-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-900">You Might Also Like</Text>
            <TouchableOpacity onPress={() => navigation?.navigate('Catalog', { category: 'Fruits' })}>
              <Text className="text-xs font-bold text-[#0C8A3C]">See all</Text>
            </TouchableOpacity>
          </View>

          {/* Horizontal Product List */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-2">
            {similarProducts.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation?.push('ProductDetails', { product: item })}
                className="w-36 bg-white border border-gray-100 rounded-2xl p-3 mx-2 shadow-xs items-center">
                <Image
                  source={{ uri: item.image }}
                  className="w-20 h-20 mb-2"
                  resizeMode="contain"
                />
                <Text className="text-sm font-bold text-gray-900 text-center" numberOfLines={1}>{item.name}</Text>
                <Text className="text-xs text-gray-500 text-center mt-0.5">
                  {item.price}/{item.unit}
                </Text>

                {/* Quick Add Button */}
                <View className="w-full bg-green-50 border border-green-200 py-1.5 rounded-lg mt-3 items-center">
                  <Text className="text-xs font-bold text-[#0C8A3C]">View</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
