import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Pressable} from 'react-native';
import {FavouriteContext} from "../../../context/favourites";
import {styled} from "styled-components/native";
import {List} from "react-native-paper";
import RestaurantInfo from "../../restaurants/components/RestaurantInfo";

const RestaurantListContainer = styled(List.Section)`
    color: #BF4F74;
    flex: 1;
`
const StyledFlatList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 4
    }
})``

const CardWrapper = styled(View)`
    border-radius: 16px;
    overflow: hidden;
    margin: 8px;
`;


function FavouritesScreen({navigation}) {

    const {favourites} = useContext(FavouriteContext);

    return (

        <View style={styles.container}>
            <RestaurantListContainer>

                {favourites.length > 0 ? (
                    <StyledFlatList
                        data={favourites}
                        renderItem={({item}) => {
                            return (
                                <CardWrapper>
                                    <Pressable android_ripple={{color: 'rgba(220,41,41,0.6)'}}
                                               onPress={() => navigation.navigate("RestaurantDetail", {item})}>
                                        <RestaurantInfo restaurant={item}/>
                                    </Pressable>
                                </CardWrapper>
                            )
                        }}
                        keyExtractor={(item) => item.placeId}
                    />
                ) : (
                    <>
                        <Text> NO favourite Restaurants For You</Text>
                    </>
                )}

            </RestaurantListContainer>

        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default FavouritesScreen;