import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styled} from "styled-components/native";
import {FavouriteContext} from "../../../context/favourites";
import {Icon} from "react-native-paper";



const FavouriteIcon=styled(TouchableOpacity)`
    
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    
`


 function Favourite({restaurant}) {

     const {favourites,addToFavourites,removeFromFavourites} = useContext(FavouriteContext)


     const isFavourite=favourites.find((item)=>{
    //     TODO find return boolean
        return item.placeId === restaurant.placeId;

    })

     // console.log("We have ",favourites.length+" favourites")

     const handlePress=()=>{
         // console.log("Current Res is Fav",isFavourite)
          !isFavourite?
              addToFavourites(restaurant):removeFromFavourites(restaurant)

     }


    return (

     // <FavouriteIcon onPress={handlePress}>
     <FavouriteIcon onPress={handlePress}>
         <Icon size={40} source={isFavourite?"heart":"heart-outline"} color={isFavourite?"#DC2525":"#fff"}/>
     </FavouriteIcon>

    )
}

export default Favourite;