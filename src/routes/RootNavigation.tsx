import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootStackParamList } from './_types';
import { fadeTransition } from './transitions';

//Unauthenticated Stack
import Login from '@/screens/Login';

//Authenticated Stack
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';

//Bottom Tabs
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabs'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          ...fadeTransition,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...fadeTransition,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          ...fadeTransition,
        }}
      />
    </Stack.Navigator>
  );
};

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const isSignedIn = useSelector(({ authSlice }: any) => authSlice.isSignedIn);

  return isSignedIn ? <AuthenticatedStack /> : <UnauthenticatedStack />;
};

export default RootNavigator;
