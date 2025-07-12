import {createContext, useCallback, useContext, useEffect, useState} from "react";
import restaurants from "../data/restaurantsData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthenticationContext} from "./authtication";


const FavouriteContext = createContext();

const FavouritesProvider = ({children}) => {

    const {user}=useContext(AuthenticationContext)

    const [favourites, setFavourites] = useState([])

    console.log("USER IN FAC CONTEXT IS  ",user)


    const saveFavourites =async  (value,uid) => {
        try {
            console.log("✅ Saving Favourites for UID:", uid);
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue)

        } catch (e) {
            console.log("Error Saving Value ", e)
        }
    }

    const loadFavourites = async (uid) => {

        console.log("LOADED UID IS ",uid)

        try {
            const valueStored = await AsyncStorage.getItem(`@favorites-${uid}`)
            if(valueStored!==null){
                setFavourites(JSON.parse(valueStored))
            }

        } catch (e) {

            console.log("Error Getting Value", e)
        }
    }


    const addToFavourites = (restaurant) => {

        console.log("ADDING FAV REESTRANT NEW")

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
        if(user){
            console.log("LOADING THE USER EXUSITN DFAV",user)
            loadFavourites(user?.uid)
        }

    }, [user]);


    // TODO Save In Storage each time adding favourite
    useEffect(() => {

        if(user){
            console.log("SAVING INTO FAV")
              saveFavourites(favourites,user?.uid)
        }

    }, [favourites,user]);


    return (
        <FavouriteContext.Provider value={{addToFavourites, removeFromFavourites, favourites}}>
            {children}
        </FavouriteContext.Provider>
    )


}

export {FavouritesProvider, FavouriteContext};