import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Pressable } from '@/components';
import { styles } from './styles';
import React from 'react';

const data = [
  {
    id: 1,
    image: 'https://picsum.photos/700',
  },
  {
    id: 2,
    image: 'https://picsum.photos/701',
  },
  {
    id: 3,
    image: 'https://picsum.photos/702',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        {data.map(item => (
          <Pressable key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Home;
