import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

export default function AddressScreen({ navigation }) {
  const [selectedTag, setSelectedTag] = useState('Work');
  const [flatNo, setFlatNo] = useState('');
  const [locality, setLocality] = useState('');

  const handleSaveAddress = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View className="px-5 pt-3 pb-2 flex-row items-center border-b border-gray-100">
        <TouchableOpacity
          className="mr-3 w-9 h-9 items-center justify-center rounded-full bg-gray-50 active:bg-gray-100"
          onPress={() => navigation?.goBack()}>
          <Icon name="arrow-left" size={24} color="#111827" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-900">Delivery Address</Text>
      </View>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 }}>
          <Text className="text-lg font-extrabold text-gray-900 mb-3">
            Delivery Address
          </Text>
          <View className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 mb-6 shadow-xs">
            <View className="flex-row items-center justify-between mb-2">
              <View className="flex-row items-center">
                <Icon name="check-circle" size={20} color="#0C8A3C" />
                <Text className="text-base font-bold text-gray-900 ml-2">Home</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-sm font-bold text-[#0C8A3C]">Change</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-sm text-gray-600 leading-snug pl-7">
              123 Green Park,
            </Text>
            <Text className="text-sm text-gray-600 leading-snug pl-7">
              New Delhi - 110016
            </Text>
          </View>
          <Text className="text-lg font-extrabold text-gray-900 mb-4">
            Add New Address
          </Text>
          <View className="flex-row mb-4">
            {['Work', 'Other'].map((tag, index) => {
              const isSelected = selectedTag === tag;
              return (
                <TouchableOpacity
                  key={tag}
                  onPress={() => setSelectedTag(tag)}
                  className={`flex-1 flex-row items-center justify-center py-3.5 rounded-2xl border ${
                    index === 0 ? 'mr-2' : 'ml-2'
                  } ${
                    isSelected
                      ? 'bg-white border-[#0C8A3C] shadow-sm'
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                  <Icon
                    name={tag === 'Work' ? 'briefcase-outline' : 'map-marker-outline'}
                    size={18}
                    color={isSelected ? '#0C8A3C' : '#9CA3AF'}
                  />
                  <Text
                    className={`ml-2 text-sm font-bold ${
                      isSelected ? 'text-[#0C8A3C]' : 'text-gray-500'
                    }`}>
                    {tag}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Flat / House No Input */}
          <View className="bg-white border border-green-200 rounded-2xl px-4 h-14 mb-4 justify-center">
            <TextInput
              className="text-base text-gray-900"
              placeholder="Flat / House No."
              placeholderTextColor="#9CA3AF"
              value={flatNo}
              onChangeText={setFlatNo}
            />
          </View>

          {/* Area / Locality Input */}
          <View className="bg-white border border-green-200 rounded-2xl px-4 h-14 mb-8 justify-center">
            <TextInput
              className="text-base text-gray-900"
              placeholder="Area / Locality"
              placeholderTextColor="#9CA3AF"
              value={locality}
              onChangeText={setLocality}
            />
          </View>

          {/* Save Address Button */}
          <TouchableOpacity
            className="w-full h-14 bg-[#0C8A3C] rounded-full items-center justify-center shadow-sm active:opacity-90"
            activeOpacity={0.85}
            onPress={handleSaveAddress}>
            <Text className="text-white text-base font-bold tracking-wide">
              Save Address
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}