import { View, Text, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../../assets/images/icon.png')}
        style={{ width: 100, height: 100 }} // Adjust width and height as needed
      />
      <Text className="font-rubik text-3xl my-10">Welcome to ReState</Text>
      <Link href="/sign-in">SignIn</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
};

export default Index;
