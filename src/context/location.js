import {createContext, useEffect, useState} from "react";
import {locationRequest, locationTransform} from "../Services/location/location.service";


const LocationContext=createContext();

const LocationProvider=({children})=>{

    const [location, setLocation] = useState(null)
    const [keyword, setKeyword] = useState("San Francisco")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch=(searchTerm)=>{
        // TODO User Type in Search
        setIsLoading(true)
        setKeyword(searchTerm)

    }

    useEffect(() => {

        if(!keyword.length){
            setError("Please Enter a City")
            return
        }

        // TODO Making API Request
        locationRequest(keyword.toLowerCase()).then(locationTransform).then((result)=>{
            setIsLoading(false)
            setLocation(result)

        }).catch((reason)=>{
            setIsLoading(false)
            setError(reason)

        })

    }, [keyword]);
    

    return (
        <LocationContext.Provider value={{isLoading,error,location,search:onSearch,keyword}}>
            {children}
        </LocationContext.Provider>
        
    )
    
}

export {LocationContext,LocationProvider};