import React, {useContext, useEffect} from 'react';
import {AuthenticationContext} from "../../context/authtication";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


import {ActivityIndicator, View} from "react-native";

import AccountNavigator from "./AccountNavigator";
import AppNavigation from "./AppNavigation";


const Stack = createNativeStackNavigator()


function RootNavigation() {


    const {isAuthenticated,isLoading} = useContext(AuthenticationContext);

    //TODO  Checking If user is Authenticated Or Not
    // useEffect(() => {
    //     const user= onLogin("testuser@gmail.com","tes123").then((res)=>{
    //         console.log("RESULTS OF AUTH ",res)
    //     })
    // }, [])

    // console.log("User is Authnticated",isAuthenticated)

    if(isLoading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#511D43"/>
            </View>
        )
    }

    return (
        <NavigationContainer>
                {isAuthenticated ?
                    <AppNavigation/>
                    :
                    <AccountNavigator/>
                }
        </NavigationContainer>

    )

}

export default RootNavigation;