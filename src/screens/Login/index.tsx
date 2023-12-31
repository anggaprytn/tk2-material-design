import React, { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Button, Text, TextInput, Dialog, Portal } from 'react-native-paper';
import { styles } from './styles';
import { useLoginScreen } from './_hooks';

const Login = () => {
  const {
    isPasswordVisible,
    setIsPasswordVisible,
    setUser,
    setPassword,
    visibleDialog,
    hideDialog,
    handleLogin,
  } = useLoginScreen();

  const renderDialog = useMemo(() => {
    return (
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
    );
  }, [hideDialog, visibleDialog]);

  const renderHeader = useMemo(() => {
    return (
      <>
        <Image
          source={require('@/assets/images/bg.webp')}
          style={styles.image}
        />
        <View style={styles.containerTextImage}>
          <Text variant="headlineLarge" style={styles.white}>
            Material Design
          </Text>
        </View>
      </>
    );
  }, []);

  const renderButton = useMemo(() => {
    return (
      <Button mode="contained" onPress={handleLogin} style={styles.btn}>
        Login
      </Button>
    );
  }, [handleLogin]);

  const renderInput = useMemo(() => {
    return (
      <>
        <TextInput
          style={styles.inputUser}
          label="User"
          onChange={e => setUser(e.nativeEvent.text)}
        />
        <TextInput
          style={styles.inputPassword}
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
      </>
    );
  }, [isPasswordVisible, setIsPasswordVisible, setPassword, setUser]);

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.center}>
          {renderHeader}
          {renderInput}
          {renderButton}
        </View>
      </View>
      {renderDialog}
    </>
  );
};

export default Login;
