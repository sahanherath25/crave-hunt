import {createContext, useCallback, useEffect, useState} from "react";
import restaurants from "../data/restaurantsData";
import AsyncStorage from "@react-native-async-storage/async-storage";


const FavouriteContext = createContext();

const FavouritesProvider = ({children}) => {

    const [favourites, setFavourites] = useState([])


    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem("@favorites", jsonValue)

        } catch (e) {
            console.log("Error Saving Value ", e)
        }
    }

    const loadFavourites = async (value) => {
        try {
            const valueStored = await AsyncStorage.getItem("@favorites")
            if(valueStored!==null){
                setFavourites(JSON.parse(valueStored))
            }

        } catch (e) {

            console.log("Error Getting Value", e)
        }
    }


    const addToFavourites = (restaurant) => {

        setFavourites((prevState) => {
            return [...prevState, restaurant]
        })

    }

    const removeFromFavourites = (restaurant) => {

        const newRestaurants = favourites.filter((item) => {
            return restaurant.placeId !== item.placeId
        })

        setFavourites(newRestaurants)

    }


    // TODO Load Favourite Items on Initial Load
    useEffect(() => {
        loadFavourites()
    }, []);


    // TODO Save In Storage each time adding favourite
    useEffect(() => {
        saveFavourites(favourites)
    }, [favourites]);


    return (
        <FavouriteContext.Provider value={{addToFavourites, removeFromFavourites, favourites}}>
            {children}
        </FavouriteContext.Provider>
    )


}

export {FavouritesProvider, FavouriteContext};