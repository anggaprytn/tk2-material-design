import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { clearTokens } from '@/redux/_reducers/authSlice';
import { useSelector } from 'react-redux';
import { store } from '@/redux/_store';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Home = () => {
  const isSignedIn = useSelector(({ authSlice }: any) => authSlice.isSignedIn);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        mode="contained"
        onPress={() => store.dispatch(clearTokens())}
        style={{
          marginTop: 16,
          width: wp(100) - 32,
          height: 50,
          justifyContent: 'center',
        }}>
        Logout
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
