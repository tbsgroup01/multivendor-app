// import React from 'react';
// import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
// import Icon from '@react-native-vector-icons/material-design-icons';
// import {useNavigation} from '@react-navigation/native';

// export default function CartScreen() {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView className="flex-1 bg-white pt-8">
//       <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
//       <View className="px-5 pt-4 pb-3 border-b border-gray-100 flex-row items-center justify-between">
//         <Text className="text-xl font-bold text-gray-900">My Cart (2 items)</Text>
//         <TouchableOpacity>
//           <Text className="text-xs font-semibold text-red-500">Clear All</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>

//         <View className="flex-row items-center justify-between p-3.5 bg-gray-50 border border-gray-100 rounded-2xl mb-3">
//           <View className="flex-row items-center flex-1">
//             <View className="w-12 h-12 rounded-xl bg-green-100 items-center justify-center mr-3">
//               <Icon name="fruit-cherries" size={24} color="#0C8A3C" />
//             </View>
//             <View className="flex-1">
//               <Text className="text-sm font-bold text-gray-900">Fresh Strawberries</Text>
//               <Text className="text-xs text-gray-400">250g</Text>
//               <Text className="text-sm font-bold text-[#0C8A3C] mt-0.5">₹120</Text>
//             </View>
//           </View>
//           <View className="flex-row items-center bg-white border border-[#0C8A3C] rounded-lg px-2 py-1">
//             <Text className="text-base font-bold text-[#0C8A3C] px-1">-</Text>
//             <Text className="text-sm font-bold text-gray-900 px-2">1</Text>
//             <Text className="text-base font-bold text-[#0C8A3C] px-1">+</Text>
//           </View>
//         </View>
//         <View className="flex-row items-center justify-between p-3.5 bg-gray-50 border border-gray-100 rounded-2xl mb-3">
//           <View className="flex-row items-center flex-1">
//             <View className="w-12 h-12 rounded-xl bg-amber-100 items-center justify-center mr-3">
//               <Icon name="bottle-tonic" size={24} color="#D97706" />
//             </View>
//             <View className="flex-1">
//               <Text className="text-sm font-bold text-gray-900">Amul Taaza Fresh Milk</Text>
//               <Text className="text-xs text-gray-400">500ml</Text>
//               <Text className="text-sm font-bold text-[#0C8A3C] mt-0.5">₹27</Text>
//             </View>
//           </View>
//           <View className="flex-row items-center bg-white border border-[#0C8A3C] rounded-lg px-2 py-1">
//             <Text className="text-base font-bold text-[#0C8A3C] px-1">-</Text>
//             <Text className="text-sm font-bold text-gray-900 px-2">1</Text>
//             <Text className="text-base font-bold text-[#0C8A3C] px-1">+</Text>
//           </View>
//         </View>
//         <View className="bg-gray-50 rounded-2xl p-4 mt-4 border border-gray-100">
//           <Text className="text-sm font-bold text-gray-900 mb-2">Bill Summary</Text>
//           <View className="flex-row justify-between mb-1.5">
//             <Text className="text-xs text-gray-500">Item Total</Text>
//             <Text className="text-xs font-semibold text-gray-800">₹147</Text>
//           </View>
//           <View className="flex-row justify-between mb-1.5">
//             <Text className="text-xs text-gray-500">Delivery Fee</Text>
//             <Text className="text-xs font-semibold text-[#0C8A3C]">FREE</Text>
//           </View>
//           <View className="h-[1px] bg-gray-200 my-2" />
//           <View className="flex-row justify-between">
//             <Text className="text-sm font-bold text-gray-900">Grand Total</Text>
//             <Text className="text-sm font-black text-[#0C8A3C]">₹147</Text>
//           </View>
//         </View>
//         <TouchableOpacity className="w-full h-14 bg-[#0C8A3C] rounded-full items-center justify-center mt-6 shadow-md"
//         onPress={() => navigation.navigate('Address')}
//         >
//           <Text className="text-white text-base font-bold tracking-wide">Proceed to Pay ₹147</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }




import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const navigation = useNavigation();

  // State variables for items quantity, promo codes & discount
  const [strawberriesQty, setStrawberriesQty] = useState(1);
  const [milkQty, setMilkQty] = useState(1);
  
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  // Prices
  const strawberryPrice = 120;
  const milkPrice = 27;

  // Calculate Subtotals
  const itemTotal = (strawberryPrice * strawberriesQty) + (milkPrice * milkQty);
  const deliveryFee = 0; // FREE
  const grandTotal = Math.max(0, itemTotal - discountAmount + deliveryFee);

  // Handle Apply Coupon Logic
  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (code === 'SHOPMORE50') {
      setAppliedCoupon('SHOPMORE50');
      setDiscountAmount(50);
      setCouponMessage('🎉 ₹50 discount applied successfully!');
    } else if (code === 'FIRST10') {
      setAppliedCoupon('FIRST10');
      setDiscountAmount(20);
      setCouponMessage('🎉 ₹20 discount applied successfully!');
    } else {
      setCouponMessage('❌ Invalid coupon code. Try SHOPMORE50');
    }
  };

  // Handle Remove Coupon
  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
    setCouponInput('');
    setCouponMessage('');
  };

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View className="px-5 pt-4 pb-3 border-b border-gray-100 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-gray-900">
          My Cart ({strawberriesQty + milkQty} items)
        </Text>
        <TouchableOpacity onPress={() => { setStrawberriesQty(0); setMilkQty(0); }}>
          <Text className="text-xs font-semibold text-red-500">Clear All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Item 1: Strawberries */}
        {strawberriesQty > 0 && (
          <View className="flex-row items-center justify-between p-3.5 bg-gray-50 border border-gray-100 rounded-2xl mb-3">
            <View className="flex-row items-center flex-1">
              <View className="w-12 h-12 rounded-xl bg-green-100 items-center justify-center mr-3">
                <Icon name="fruit-cherries" size={24} color="#0C8A3C" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-gray-900">Fresh Strawberries</Text>
                <Text className="text-xs text-gray-400">250g</Text>
                <Text className="text-sm font-bold text-[#0C8A3C] mt-0.5">₹{strawberryPrice * strawberriesQty}</Text>
              </View>
            </View>
            <View className="flex-row items-center bg-white border border-[#0C8A3C] rounded-lg px-2 py-1">
              <TouchableOpacity onPress={() => setStrawberriesQty(Math.max(0, strawberriesQty - 1))}>
                <Text className="text-base font-bold text-[#0C8A3C] px-1">-</Text>
              </TouchableOpacity>
              <Text className="text-sm font-bold text-gray-900 px-2">{strawberriesQty}</Text>
              <TouchableOpacity onPress={() => setStrawberriesQty(strawberriesQty + 1)}>
                <Text className="text-base font-bold text-[#0C8A3C] px-1">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Item 2: Milk */}
        {milkQty > 0 && (
          <View className="flex-row items-center justify-between p-3.5 bg-gray-50 border border-gray-100 rounded-2xl mb-3">
            <View className="flex-row items-center flex-1">
              <View className="w-12 h-12 rounded-xl bg-amber-100 items-center justify-center mr-3">
                <Icon name="bottle-tonic" size={24} color="#D97706" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-gray-900">Amul Taaza Fresh Milk</Text>
                <Text className="text-xs text-gray-400">500ml</Text>
                <Text className="text-sm font-bold text-[#0C8A3C] mt-0.5">₹{milkPrice * milkQty}</Text>
              </View>
            </View>
            <View className="flex-row items-center bg-white border border-[#0C8A3C] rounded-lg px-2 py-1">
              <TouchableOpacity onPress={() => setMilkQty(Math.max(0, milkQty - 1))}>
                <Text className="text-base font-bold text-[#0C8A3C] px-1">-</Text>
              </TouchableOpacity>
              <Text className="text-sm font-bold text-gray-900 px-2">{milkQty}</Text>
              <TouchableOpacity onPress={() => setMilkQty(milkQty + 1)}>
                <Text className="text-base font-bold text-[#0C8A3C] px-1">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* --- OFFERS & PROMO CODE SECTION --- */}
        <View className="bg-white border border-gray-200 rounded-2xl p-4 mb-4 shadow-xs">
          <View className="flex-row items-center mb-2">
            <Icon name="tag-outline" size={20} color="#0C8A3C" />
            <Text className="text-sm font-bold text-gray-900 ml-2">Apply Offers / Coupons</Text>
          </View>

          {!appliedCoupon ? (
            <View>
              <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-xl px-3 h-12">
                <TextInput
                  className="flex-1 text-sm text-gray-900 uppercase"
                  placeholder="Enter coupon (e.g. SHOPMORE50)"
                  placeholderTextColor="#9CA3AF"
                  value={couponInput}
                  onChangeText={setCouponInput}
                  autoCapitalize="characters"
                />
                <TouchableOpacity
                  className="bg-[#0C8A3C] px-4 py-2 rounded-lg"
                  onPress={handleApplyCoupon}>
                  <Text className="text-white text-xs font-bold">Apply</Text>
                </TouchableOpacity>
              </View>
              {couponMessage ? (
                <Text className={`text-xs mt-2 font-medium ${appliedCoupon ? 'text-green-600' : 'text-red-500'}`}>
                  {couponMessage}
                </Text>
              ) : null}
              <Text className="text-[11px] text-gray-400 mt-1">
                Tip: Try entering code <Text className="font-bold text-gray-600">SHOPMORE50</Text> for ₹50 off!
              </Text>
            </View>
          ) : (
            <View className="flex-row items-center justify-between bg-green-50 border border-green-200 rounded-xl p-3">
              <View className="flex-row items-center">
                <Icon name="check-circle" size={18} color="#0C8A3C" />
                <View className="ml-2">
                  <Text className="text-xs font-bold text-green-800">{appliedCoupon} Applied</Text>
                  <Text className="text-[11px] text-green-600">You saved ₹{discountAmount} on this order</Text>
                </View>
              </View>
              <TouchableOpacity onPress={handleRemoveCoupon}>
                <Text className="text-xs font-bold text-red-500">Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Bill Summary */}
        <View className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <Text className="text-sm font-bold text-gray-900 mb-2">Bill Summary</Text>
          
          <View className="flex-row justify-between mb-1.5">
            <Text className="text-xs text-gray-500">Item Total</Text>
            <Text className="text-xs font-semibold text-gray-800">₹{itemTotal}</Text>
          </View>

          {discountAmount > 0 && (
            <View className="flex-row justify-between mb-1.5">
              <Text className="text-xs text-green-600 font-medium">Offer Discount ({appliedCoupon})</Text>
              <Text className="text-xs font-semibold text-green-600">-₹{discountAmount}</Text>
            </View>
          )}

          <View className="flex-row justify-between mb-1.5">
            <Text className="text-xs text-gray-500">Delivery Fee</Text>
            <Text className="text-xs font-semibold text-[#0C8A3C]">FREE</Text>
          </View>

          <View className="h-[1px] bg-gray-200 my-2" />
          
          <View className="flex-row justify-between">
            <Text className="text-sm font-bold text-gray-900">Grand Total</Text>
            <Text className="text-sm font-black text-[#0C8A3C]">₹{grandTotal}</Text>
          </View>
        </View>

        {/* Proceed to Pay Button */}
        <TouchableOpacity
          className="w-full h-14 bg-[#0C8A3C] rounded-full items-center justify-center mt-6 shadow-md"
          onPress={() => navigation.navigate('Address')}
        >
          <Text className="text-white text-base font-bold tracking-wide">
            Proceed to Pay ₹{grandTotal}
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}