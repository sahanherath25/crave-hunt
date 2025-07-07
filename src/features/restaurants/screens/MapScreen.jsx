import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {Callout, MapCallout, Marker} from "react-native-maps";
import {styled} from "styled-components/native";
import MapSearchBar from "../../map/components/MapSearchBar";
import {LocationContext} from "../../../context/location";
import {RestaurantContext} from "../../../context/restaurant";
import CustomMapCallout from "../../map/components/CustomMapCallout";

const Map = styled(MapView)`
    height: 100%
`


function MapScreen({navigation}) {


    const {location} = useContext(LocationContext);
    const {restaurants} = useContext(RestaurantContext);
    const [latDelta, setLatDelta] = useState(0)

    const {lat, lng, viewport} = location


    useEffect(() => {

        const northEastLat = viewport.northeast.lat
        const southEastLat = viewport.southwest.lat

        const latitudeDelta = northEastLat - southEastLat;

        setLatDelta(latitudeDelta)

    }, [location, viewport]);


    return (
        < >
            <MapSearchBar/>

            <Map region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02
            }}>
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <Marker
                                key={restaurant.name}
                                title={restaurant.name}
                                coordinate={{
                                    latitude: restaurant.geometry.location.lat,
                                    longitude: restaurant.geometry.location.lng,
                                }}
                            >
                                <MapCallout onPress={()=>navigation.navigate("Restaurants",{screen:"RestaurantDetail",params:{item:restaurant}})}>
                                    {/*<CustomMapCallout restaurant={restaurant}/>*/}
                                </MapCallout>

                            </Marker>
                        )
                    })
                }
            </Map>
        </>
    )

}


export default MapScreen;