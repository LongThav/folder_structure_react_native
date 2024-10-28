import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../container/auth_container/LoginScreen';
import RegisterScreen from '../container/auth_container/RegisterScreen';

const MainStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'fade_from_bottom',
            }}>
            <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen component={RegisterScreen} name="Register" />
        </Stack.Navigator>
    );
};

export default MainStack;

const styles = StyleSheet.create({});