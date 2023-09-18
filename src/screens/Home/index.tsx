import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Pressable } from '@/components';
import { styles } from './styles';
import React from 'react';
import { dataCard } from '@/constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        {dataCard.map(item => (
          <Pressable key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Home;
