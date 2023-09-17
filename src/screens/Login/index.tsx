import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Button, Text, TextInput, Dialog, Portal } from 'react-native-paper';
import { setAuthTokens } from '@/redux/_reducers/authSlice';
import { store } from '@/redux/_store';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false);

  const showDialog = () => setVisibleDialog(true);

  const hideDialog = () => setVisibleDialog(false);

  const handleLogin = () => {
    user === 'pengguna' && password === 'masuk'
      ? store.dispatch(setAuthTokens())
      : showDialog();
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('@/assets/images/bg.webp')}
            style={{
              height: 200 + statusBarHeight,
              width: wp(100),
              backgroundColor: 'pink',
            }}
          />
          <View
            style={{
              marginTop: statusBarHeight,
              height: 200,
              width: wp(100),
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text variant="headlineLarge" style={{ color: 'white' }}>
              Material Design
            </Text>
          </View>
          <TextInput
            style={{ width: wp(100) - 32, marginTop: 16 }}
            label="User"
            onChange={e => setUser(e.nativeEvent.text)}
          />
          <TextInput
            style={{ width: wp(100) - 32, marginTop: 16 }}
            label="Password"
            secureTextEntry={!isPasswordVisible}
            onChange={e => setPassword(e.nativeEvent.text)}
            right={
              <TextInput.Icon
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                icon={isPasswordVisible ? 'eye-off' : 'eye'}
              />
            }
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            style={{
              marginTop: 16,
              width: wp(100) - 32,
              height: 50,
              justifyContent: 'center',
            }}>
            Login
          </Button>
        </View>
      </View>
      <Portal>
        <Dialog visible={visibleDialog} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Invalid password. Please try again.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
