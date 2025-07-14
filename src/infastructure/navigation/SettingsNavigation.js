import {StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {CardStyleInterpolators, TransitionPresets} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/screens/SettingsScreen";
import FavouritesScreen from "../../features/settings/screens/FavouritesScreen";

const SettingsStack = createNativeStackNavigator()


function RestaurantsNavigation() {

    return (
        <SettingsStack.Navigator id={"settings"} screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            gestureEnabled: true,
        }} >
            <SettingsStack.Screen name="Settings" component={SettingsScreen} options={
                { headerShown: false }
            } />
            <SettingsStack.Screen name="favourites" component={FavouritesScreen} options={{
                headerShown:false
            }} />
        </SettingsStack.Navigator>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default RestaurantsNavigation;
