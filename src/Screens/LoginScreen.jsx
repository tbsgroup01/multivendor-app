import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to MainTab (Home)
    navigation.replace('MainTab');
  };

  return (
    <SafeAreaView className="flex-1 bg-green-50 pt-8 relative overflow-hidden">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Decorative Top-Right Circles */}
      <View className="absolute top-0 right-0 pointer-events-none z-0">
        <View className="w-72 h-72 bg-[#F8CB1D]/70 rounded-full -mr-12 -mt-12 absolute top-4 right-4" />
        <View className="w-36 h-36 bg-[#0C8A3C]/80 rounded-full -mr-10 -mt-4 absolute top-0 right-0" />
      </View>

      <KeyboardAvoidingView
        className="flex-1 z-10"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          <View className="flex-1 px-6 pt-6 pb-10">

            {/* Close Button */}
            <TouchableOpacity
              className="w-10 h-10 items-center justify-center rounded-full bg-green-100 border border-green-200 shadow-md"
              onPress={() => navigation?.goBack()}>
              <Icon name="close" size={22} color="#111827" />
            </TouchableOpacity>

            {/* Logo */}
            <View className="items-center mt-8 mb-6">
              <Text className="text-4xl font-black tracking-tight text-black">
                Shop<Text className="text-[#0C8A3C]">more</Text>
              </Text>
            </View>

            {/* Welcome Text */}
            <Text className="text-2xl font-bold text-gray-900 text-center">
              Welcome Back
            </Text>
            <Text className="text-sm text-gray-500 text-center mt-1 mb-8">
              Login to continue
            </Text>

            {/* Mobile Number Input */}
            <View className="flex-row items-center bg-white border border-green-100 rounded-2xl px-4 h-14 mb-4">
              <Icon name="cellphone" size={22} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900"
                placeholder="Enter Mobile Number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
                maxLength={10}
              />
            </View>

            {/* Password Input */}
            <View className="flex-row items-center bg-white border border-green-100 rounded-2xl px-4 h-14 mb-6">
              <Icon name="lock-outline" size={22} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900"
                placeholder="Enter Password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              className="w-full h-14 bg-[#0C8A3C] rounded-full items-center justify-center mb-6"
              activeOpacity={0.85}
              onPress={handleLogin}>
              <Text className="text-white text-base font-bold tracking-wide">
                Login
              </Text>
            </TouchableOpacity>

            {/* OR Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="mx-4 text-xs font-semibold text-gray-400 tracking-wider">OR</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* Continue with Google */}
            <TouchableOpacity
              className="flex-row items-center justify-center w-full h-14 bg-white border border-gray-200 rounded-2xl mb-6"
              activeOpacity={0.85}
              onPress={handleLogin}>
              <Icon name="google" size={18} color="#ea076dff" />
              <Text className="text-base font-semibold text-gray-700 ml-3">Continue with Google</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View className="flex-row justify-center items-center">
              <Text className="text-sm text-gray-500">Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
                <Text className="text-sm font-bold text-[#0C8A3C]">Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
