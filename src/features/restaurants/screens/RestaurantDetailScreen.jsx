import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {List} from "react-native-paper";


function RestaurantDetailScreen({route}) {

    const [breakfastExpanded, setBreakfastExpanded] = useState(true);
    const [lunchExpanded, setLunchExpanded] = useState(true);
    const [dinnerExpanded, setDinnerExpanded] = useState(true);
    const [drinksExpanded, setDrinksExpanded] = useState(true);


    // const handlePress = () => setExpanded(!expanded);

    const restaurant = route.params;

    const {name, vicinity: address, placeId} = restaurant.item

    console.log("ROUTE DATA ", restaurant);

    return (

        <View style={styles.container}>
            <Text> Welcome to {name} </Text>
            <Text>Find Us On {address}</Text>
            <Text>Our Registration No if {placeId}</Text>


            <List.Section title={"Accordions"}>
                <ScrollView>
                    <List.Accordion
                        title="Breakfast"
                        left={props => <List.Icon {...props} icon="weather-sunny"/>}
                        expanded={breakfastExpanded}
                        onPress={()=>setBreakfastExpanded(!breakfastExpanded)}

                    >
                        <List.Item title="Eggs"/>
                        <List.Item title="Baked beans"/>
                        <List.Item title="String Hoppers"/>
                        <List.Item title="Fried Rice"/>
                        <List.Item title="Fried Rice"/>
                    </List.Accordion>


                    <List.Accordion
                        rippleColor={"#a64444"}
                        title="Lunch"
                        left={props => <List.Icon {...props} icon="hamburger"/>}
                        expanded={lunchExpanded}
                        onPress={()=>setLunchExpanded(!lunchExpanded)}>
                        <List.Item title="Sea Food Rice"
                                   // left={props => <List.Icon {...props} icon="hamburger"/>}
                        />
                        <List.Item title="Fried Rice"/>
                        <List.Item title="Fish Fried Rice"/>
                        <List.Item title="Vegetable Rice"/>
                        <List.Item title="Spaghetti Bolognese"/>
                    </List.Accordion>


                    <List.Accordion
                        rippleColor={"#a64444"}
                        title="Dinner"
                        left={props => <List.Icon {...props} icon="theme-light-dark"/>}
                        expanded={dinnerExpanded}
                        onPress={()=>setDinnerExpanded(!dinnerExpanded)}

                    >

                        <List.Item title="Rice And Curry" icon="hamburger"/>
                        <List.Item title="Grilled Chicken Wrap"/>
                        <List.Item title="Beef Burger & Fries"/>
                        <List.Item title="Caesar Salad"/>
                        <List.Item title="Second item"/>
                    </List.Accordion>


                    <List.Accordion
                        rippleColor={"#a64444"}
                        title="Drinks"
                        left={props => <List.Icon {...props} icon="food"/>}
                        expanded={drinksExpanded}
                        onPress={()=>setDrinksExpanded(!drinksExpanded)}>
                        <List.Item title="Grilled Salmon Fillet"/>
                        <List.Item title="Steak & Mushroom Sauce"/>
                        <List.Item title="Butter Chicken & Naan"/>
                        <List.Item title="Veggie Stir Fry"/>
                        <List.Item title="Cheesy Baked Lasagna"/>
                    </List.Accordion>

                </ScrollView>

            </List.Section>

        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default RestaurantDetailScreen;