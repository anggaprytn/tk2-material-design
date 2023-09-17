import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import IconFeather from 'react-native-vector-icons/Feather';
import { Text } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Catalog"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <>
              <IconFeather name="home" color={color} size={24} />
              <Text variant="labelSmall" style={{ color }}>
                Catalog
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <IconFeather name="user" color={color} size={24} />
              <Text variant="labelSmall" style={{ color }}>
                Profile
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
