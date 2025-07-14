import React from 'react';
import {StyleSheet} from 'react-native';

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon, List, MD2Colors, MD3Colors, Searchbar} from "react-native-paper";
import SettingsScreen from "../features/restaurants/screens/SettingsScreen";
import MapScreen from "../features/restaurants/screens/MapScreen";
import RestaurantsNavigation from "../infastructure/navigation/RestaurantsNavigation";
import {FavouritesProvider} from "../context/favourites";
import {LocationProvider} from "../context/location";
import {RestaurantProvider} from "../context/restaurant";
import SettingsNavigation from "../infastructure/navigation/SettingsNavigation";


const Tab = createBottomTabNavigator()

function MiniTabs({}) {
    return (

        <FavouritesProvider>
            <LocationProvider>
                <RestaurantProvider>
                    <Tab.Navigator id={"id"} screenOptions={({route}) => ({
                        // TODO Expect tabBarIcon:
                        tabBarIcon: ({f, color, size}) => {
                            let iconName;
                            if (route.name === "restaurants") {
                                iconName = "table-chair"
                            } else if (route.name === "settings") {
                                iconName = "cog-refresh-outline"
                            } else if (route.name === "map") {
                                iconName = "map-marker-circle"
                            }

                            return <Icon source={iconName} color={MD3Colors.error50} size={30}/>
                        },
                        tabBarActiveTintColor: "brown",
                        tabBarInactiveTintColor: "gray",
                        tabBarStyle: {
                            display: "flex",
                            justifyContent: "center",
                        },
                        headerStyle: {backgroundColor: "#cc3140"},
                        headerTintColor: "#fff",
                        headerTitleStyle: {fontWeight: "bold"},
                        headerTitleAlign: "center",
                        animation: "fade"

                    })}>
                        <Tab.Screen name={"Restaurants"} component={RestaurantsNavigation} options={{
                            title: "Home Screen",
                            headerShown: false,
                        }}/>
                        <Tab.Screen name={"map"} component={MapScreen} options={{
                            title: "Map Screen",
                            headerShown: false
                        }}/>
                        <Tab.Screen name={"settings"} component={SettingsNavigation} options={{
                            title: "Settings Screen",
                        }}/>
                    </Tab.Navigator>
                </RestaurantProvider>
            </LocationProvider>
        </FavouritesProvider>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default MiniTabs;

//TODO  Shorthand for immediate return an object ({route})=>({}) ==== ({})=>{ return {}}

// headerStyle: {backgroundColor: "#cc3140"},
// headerTintColor: "#fff",
//     headerTitleStyle: {fontWeight: "bold"},
// headerTitleAlign: "center",
//     animation: "fade"