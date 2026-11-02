import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 4500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-[#F8CB1D]">
      <StatusBar barStyle="dark-content" backgroundColor="#F8CB1D" />
      <View className="flex-1 justify-between items-center pt-16 pb-8">
        <View className="items-center mt-6">
          <View className="flex-row items-center">
            <Text className="text-5xl font-black tracking-tight text-black">
              Shop<Text className="text-[#10703B]">more</Text>
            </Text>
          </View>
          <Text className="text-black font-medium text-lg mt-1 tracking-wide">
            India's Last Minute App
          </Text>
        </View>
        <View className="w-full relative items-center justify-end flex-1">

          <View className="absolute bottom-0 w-full h-44 bg-[#10703B] rounded-t-[40px] z-0" />
          <Image
            source={require('../../assets/splash.png')}
            className="w-72 h-80 z-10 resize-contain mb-2"
            resizeMode="contain"
          />
        </View>

      </View>
    </SafeAreaView>
  );
}
