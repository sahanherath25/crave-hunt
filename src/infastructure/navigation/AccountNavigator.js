import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AccountScreen from "../../features/account/screens/AccountScreen";
import LoginScreen from "../../features/account/screens/LoginScreen";
import RegisterScreen from "../../features/account/screens/RegisterScreen";


const Stack=createNativeStackNavigator()

 function AccountNavigator({}) {

    return (

        <Stack.Navigator id={"account"} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={"Main"} component={AccountScreen}/>
            <Stack.Screen name={"Login"} component={LoginScreen}/>
            <Stack.Screen name={"Register"} component={RegisterScreen}/>
        </Stack.Navigator>

    )
}





export default AccountNavigator;