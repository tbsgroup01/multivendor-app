import React, { useState, useEffect } from 'react';
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

export default function CatalogScreen({ navigation, route }) {
  const initialCategory = route?.params?.category || 'All';
  const [selectedTab, setSelectedTab] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (route?.params?.category) {
      setSelectedTab(route.params.category);
    }
  }, [route?.params?.category]);

  const tabs = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Snacks', 'Beauty', 'Electronics'];

  const allProducts = [
    // Fruits
    {
      id: 'f1',
      name: 'Fresh Shimla Apple',
      category: 'Fruits',
      price: '₹149',
      unit: 'kg',
      rating: '4.8',
      description: 'Crisp and sweet fresh Shimla apples packed with vitamins.',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f2',
      name: 'Robusta Banana',
      category: 'Fruits',
      price: '₹60',
      unit: 'dozen',
      rating: '4.6',
      description: 'Naturally ripened, sweet and energy-packed bananas.',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f3',
      name: 'Nagpur Fresh Orange',
      category: 'Fruits',
      price: '₹99',
      unit: 'kg',
      rating: '4.5',
      description: 'Juicy citrus Nagpur oranges, rich in Vitamin C.',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f4',
      name: 'Alphonso Mango',
      category: 'Fruits',
      price: '₹249',
      unit: 'kg',
      rating: '4.9',
      description: 'King of fruits! Premium quality aromatic Alphonso mangoes.',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f5',
      name: 'Seedless Green Grapes',
      category: 'Fruits',
      price: '₹120',
      unit: '500g',
      rating: '4.7',
      description: 'Sweet, crisp and seedless green table grapes.',
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f6',
      name: 'Fresh Strawberries',
      category: 'Fruits',
      price: '₹139',
      unit: 'box',
      rating: '4.7',
      description: 'Bright red, succulent Mahabaleshwar strawberries.',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f7',
      name: 'Sweet Watermelon',
      category: 'Fruits',
      price: '₹79',
      unit: 'pc',
      rating: '4.5',
      description: 'Refreshing and hydrating whole sweet watermelon.',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'f8',
      name: 'Green Kiwi Fruit',
      category: 'Fruits',
      price: '₹110',
      unit: '3 pcs',
      rating: '4.6',
      description: 'Zesty green kiwis loaded with dietary fiber.',
      image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=300&auto=format&fit=crop',
    },

    // Vegetables
    {
      id: 'v1',
      name: 'Fresh Farm Potatoes',
      category: 'Vegetables',
      price: '₹35',
      unit: 'kg',
      rating: '4.5',
      description: 'Clean, firm and versatile farm fresh potatoes.',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'v2',
      name: 'Hybrid Red Tomatoes',
      category: 'Vegetables',
      price: '₹40',
      unit: 'kg',
      rating: '4.6',
      description: 'Plump and juicy red tomatoes perfect for curries and salads.',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'v3',
      name: 'Fresh Red Onions',
      category: 'Vegetables',
      price: '₹45',
      unit: 'kg',
      rating: '4.4',
      description: 'Pungent and flavorful kitchen staple red onions.',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'v4',
      name: 'Green Capsicum (Shimla Mirch)',
      category: 'Vegetables',
      price: '₹55',
      unit: '500g',
      rating: '4.7',
      description: 'Crunchy bell peppers ideal for stir fry and pizza.',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'v5',
      name: 'Fresh Spinach (Palak)',
      category: 'Vegetables',
      price: '₹25',
      unit: 'bunch',
      rating: '4.8',
      description: 'Iron-rich tender green spinach leaves.',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=300&auto=format&fit=crop',
    },

    // Dairy
    {
      id: 'd1',
      name: 'Amul Taaza Toned Milk',
      category: 'Dairy',
      price: '₹27',
      unit: '500ml',
      rating: '4.9',
      description: 'Fresh toned pasteurized milk for everyday tea and coffee.',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'd2',
      name: 'Amul Salted Butter',
      category: 'Dairy',
      price: '₹58',
      unit: '100g',
      rating: '4.9',
      description: 'Utterly butterly delicious classic salted butter.',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'd3',
      name: 'Fresh Malai Paneer',
      category: 'Dairy',
      price: '₹95',
      unit: '200g',
      rating: '4.8',
      description: 'Soft, creamy and rich protein-packed paneer block.',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'd4',
      name: 'Amul Masti Dahi',
      category: 'Dairy',
      price: '₹35',
      unit: '400g',
      rating: '4.7',
      description: 'Thick, creamy and delicious plain curd.',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=300&auto=format&fit=crop',
    },

    // Snacks
    {
      id: 's1',
      name: "Lay's Classic Salted Chips",
      category: 'Snacks',
      price: '₹20',
      unit: 'pack',
      rating: '4.6',
      description: 'Crispy wafer-thin potato chips lightly salted.',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 's2',
      name: 'Kurkure Masala Munch',
      category: 'Snacks',
      price: '₹20',
      unit: 'pack',
      rating: '4.7',
      description: 'Crunchy tedhe-medhe corn puffs coated with spicy chatpata masala.',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 's3',
      name: "Haldiram's Bhujia Sev",
      category: 'Snacks',
      price: '₹55',
      unit: '200g',
      rating: '4.8',
      description: 'Authentic Rajasthani crispy and spiced gram flour namkeen.',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=300&auto=format&fit=crop',
    },

    // Beauty
    {
      id: 'b1',
      name: 'Nivea Soft Light Moisturizer',
      category: 'Beauty',
      price: '₹199',
      unit: '100ml',
      rating: '4.8',
      description: 'Non-greasy hydrating cream with Jojoba Oil and Vitamin E.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'b2',
      name: 'Dove Deep Moisture Soap (3-pack)',
      category: 'Beauty',
      price: '₹165',
      unit: 'pack',
      rating: '4.7',
      description: 'Gentle cleansing moisturizing beauty bathing bar.',
      image: 'https://images.unsplash.com/photo-1608248597359-5f21d3e8e2c0?q=80&w=300&auto=format&fit=crop',
    },

    // Electronics
    {
      id: 'e1',
      name: 'Type-C Fast Charging Cable',
      category: 'Electronics',
      price: '₹199',
      unit: '1m',
      rating: '4.6',
      description: '65W durable braided fast-charging data cable.',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'e2',
      name: 'boAt True Wireless Earbuds',
      category: 'Electronics',
      price: '₹999',
      unit: 'pair',
      rating: '4.5',
      description: 'Deep bass, low latency gaming mode and 40h total battery backup.',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'e3',
      name: '33W Super Fast USB Adapter',
      category: 'Electronics',
      price: '₹499',
      unit: 'pc',
      rating: '4.7',
      description: 'Universal dual-port fast wall charger with surge protection.',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=300&auto=format&fit=crop',
    },
  ];

  // Filtering by tab & search query
  const filteredProducts = allProducts.filter((product) => {
    const matchesTab = selectedTab === 'All' || product.category.toLowerCase() === selectedTab.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Top Search Bar & Back Button Container */}
      <View className="px-5 pt-3 pb-2 flex-row items-center">
        {/* Back Button */}
        <TouchableOpacity 
          className="mr-3 w-10 h-10 items-center justify-center rounded-full bg-gray-50 border border-gray-100"
          onPress={() => navigation?.goBack()}>
          <Icon name="arrow-left" size={24} color="#111827" />
        </TouchableOpacity>

        {/* Search Input Bar */}
        <View className="flex-1 flex-row items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 h-12">
          <Icon name="magnify" size={20} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-2.5 text-base text-gray-900"
            placeholder={`Search in ${selectedTab}...`}
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Icon name="close-circle" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Horizontal Filter Tabs */}
      <View className="px-5 pt-2 border-b border-gray-100">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {tabs.map((tab) => {
            const isActive = selectedTab.toLowerCase() === tab.toLowerCase();
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelectedTab(tab)}
                className="mr-5 pb-2.5 relative">
                <Text
                  className={`text-sm font-bold ${
                    isActive ? 'text-[#0C8A3C]' : 'text-gray-400'
                  }`}>
                  {tab}
                </Text>
                {/* Active Indicator Underline */}
                {isActive && (
                  <View className="absolute bottom-0 left-0 right-0 h-1 bg-[#0C8A3C] rounded-full" />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Category Header Count */}
      <View className="px-5 pt-3 pb-1 flex-row items-center justify-between">
        <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {selectedTab} Catalog ({filteredProducts.length} items)
        </Text>
      </View>

      {/* Product List ScrollView */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 6, paddingBottom: 30 }}>
        {filteredProducts.length === 0 ? (
          <View className="items-center justify-center py-20">
            <Icon name="package-variant" size={48} color="#D1D5DB" />
            <Text className="text-base font-bold text-gray-800 mt-3">No products found</Text>
            <Text className="text-xs text-gray-400 mt-1">Try searching for something else</Text>
          </View>
        ) : (
          filteredProducts.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => navigation?.navigate('ProductDetails', { product: item })}
              className="flex-row items-center justify-between py-3.5 border-b border-gray-100">
              
              {/* Left: Product Image Card */}
              <View className="w-24 h-24 rounded-2xl bg-amber-50/50 border border-amber-100/60 overflow-hidden items-center justify-center p-2">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>

              {/* Middle: Name, Rating & Price */}
              <View className="flex-1 ml-4 justify-center pr-2">
                <Text className="text-base font-bold text-gray-900" numberOfLines={1}>
                  {item.name}
                </Text>
                <View className="flex-row items-center mt-1">
                  <Icon name="star" size={14} color="#F59E0B" />
                  <Text className="text-xs font-bold text-gray-700 ml-1">{item.rating}</Text>
                  <Text className="text-xs text-gray-400 ml-1">· {item.category}</Text>
                </View>
                <Text className="text-sm font-bold text-[#0C8A3C] mt-1.5">
                  {item.price}
                  <Text className="text-xs text-gray-400 font-normal"> /{item.unit}</Text>
                </Text>
              </View>

              {/* Right: Add Button */}
              <TouchableOpacity
                className="bg-[#0C8A3C] px-5 py-2.5 rounded-xl shadow-xs"
                activeOpacity={0.85}
                onPress={() => navigation?.navigate('ProductDetails', { product: item })}>
                <Text className="text-white text-xs font-bold uppercase tracking-wider">Add</Text>
              </TouchableOpacity>

            </TouchableOpacity>
          ))
        )}
      </ScrollView>

    </SafeAreaView>
  );
}
