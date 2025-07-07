import {createContext, useContext, useEffect, useState} from "react";
import {restaurantsRequest, restaurantsTransform} from "../Services/restaurants/restaurants";
import {LocationContext} from "./location";


const RestaurantContext = createContext();


const RestaurantProvider = ({children}) => {

    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const {location}=useContext(LocationContext);


    function retrieveRestaurants(searchLocation) {

        setIsLoading(true)
        setRestaurants([])

        setTimeout(async () => {

            try {

                const totalData = await restaurantsRequest(searchLocation)

                console.log("Searched Location Coordinates ",searchLocation)

                const res=restaurantsTransform(totalData)

                // console.log("FUKC YOU NIGGA",res)
                setRestaurants(res)
                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
                setError(true)
                // console.log("Error ", e)

            }

        }, 2000)
    }


    useEffect(() => {

        if(location){
            const locationString=`${location.lat},${location.lng}`
            const data = retrieveRestaurants(locationString)

            console.log("Location Was Chaneged Refetching")
        }

    }, [location])

    return (
        <RestaurantContext.Provider value={{restaurants,isLoading,error}}>
            {children}
        </RestaurantContext.Provider>

    )

}

export {RestaurantProvider, RestaurantContext}