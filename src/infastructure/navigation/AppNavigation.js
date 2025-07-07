import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import MiniTabs from "../../screens/TestScreen";
import HomeScreen from "../../screens/HomeScreen";
import RestaurantScreen from "../../features/restaurants/screens/RestaurantScreen";
import LoginLoad from "../../screens/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()



function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator id={"root"} initialRouteName={"login"} screenOptions={{
                headerTintColor: "#fff",
                headerTitleStyle: {fontWeight: "bold"},
                headerTitleAlign: "center",
                animation: "fade",
                headerStyle: {
                    backgroundColor: "#511D43",
                },
            }}>
                <Stack.Screen name={"MiniTabs"} component={MiniTabs} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name={"home"} component={HomeScreen} options={{
                    title: "Home Screen",

                }}/>
                <Stack.Screen name={"restaurant"} component={RestaurantScreen} options={{
                    title: "Restaurant Detail",

                }}/>
                <Stack.Screen name={"login"} component={LoginLoad} options={{
                    headerShown: true,
                    headerTitleStyle: {
                        backgroundColor: "#ff0000",
                        margin: 0,
                        padding: 0,
                        borderWidth: 1,
                        borderColor: '#000000',
                        borderStyle: "solid"
                    }
                }}/>
            </Stack.Navigator>
        </NavigationContainer>

    )

}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default AppNavigation;