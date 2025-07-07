import React from 'react';
import {View, ScrollView} from 'react-native';
import CompactRestaurantInfo from "./CompactRestaurantInfo";
import {styled} from "styled-components/native";
import Spacer from "../features/restaurants/components/Spacer";

const FavouritesWrapper = styled.View`
    padding: 5px;

`


function FavouritesBar({favourites}) {

    return (


        <FavouritesWrapper>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    console.log("FAV RES", restaurant.name)
                    return (
                        <React.Fragment key={restaurant.name}>
                            <Spacer position={"left"} size={"small"}/>
                            <CompactRestaurantInfo restaurant={restaurant}/>
                        </React.Fragment>

                    )
                })}
            </ScrollView>
        </FavouritesWrapper>

    )

}


export default FavouritesBar;