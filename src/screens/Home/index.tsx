import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Pressable } from '@/components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Home = () => {
  const isSignedIn = useSelector(({ authSlice }: any) => authSlice.isSignedIn);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Pressable style={styles.card}>
          <Image
            source={{ uri: 'https://picsum.photos/700' }}
            style={{
              width: wp(100) - 32,
              height: 175,
              borderRadius: 10,
            }}
          />
        </Pressable>
        <Pressable style={styles.card}>
          <Image
            source={{ uri: 'https://picsum.photos/701' }}
            style={{
              width: wp(100) - 32,
              height: 175,
              borderRadius: 10,
            }}
          />
        </Pressable>
        <Pressable style={styles.card}>
          <Image
            source={{ uri: 'https://picsum.photos/702' }}
            style={{
              width: wp(100) - 32,
              height: 175,
              borderRadius: 10,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    width: wp(100) - 32,
    height: 175,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 10,
  },
});
