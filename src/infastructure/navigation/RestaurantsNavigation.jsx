import {StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RestaurantScreen from "../../features/restaurants/screens/RestaurantScreen";
import RestaurantDetailScreen from "../../features/restaurants/screens/RestaurantDetailScreen";
import {CardStyleInterpolators, TransitionPresets} from "@react-navigation/stack";

const RestaurantStack = createNativeStackNavigator()


 function RestaurantsNavigation() {

    return (
        <RestaurantStack.Navigator id={"res"} screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            gestureEnabled: true,
        }} >
            <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} options={
                { headerShown: false }
            } />
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} options={{
                headerTitle:"Restaurant Details",
            }} />
        </RestaurantStack.Navigator>
    )

}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default RestaurantsNavigation;
