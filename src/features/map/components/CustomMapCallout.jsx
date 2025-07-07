import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import {MapCallout} from "react-native-maps";
import {styled} from "styled-components/native";
import CompactRestaurantInfo from "../../../components/CompactRestaurantInfo";


 function CustomMapCallout({restaurant}) {

    return (
        <CompactRestaurantInfo restaurant={restaurant}/>

    )

}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default CustomMapCallout;