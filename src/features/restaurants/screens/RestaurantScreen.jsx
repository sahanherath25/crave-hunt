import React, {useContext, useState} from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet, Button, Pressable, TouchableOpacity} from 'react-native';
import {List, MD2Colors} from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";
import {RestaurantContext} from "../../../context/restaurant";
import Search from "../components/Search";
import {styled} from "styled-components/native";
import {useNavigation} from "@react-navigation/native";
import {FavouriteContext} from "../../../context/favourites";
import FavouritesBar from "../../../components/FavouritesBar";
import {FadeInView} from "../../../components/animations/FadeAnimation";

const SearchContainer = styled.View``

const RestaurantListContainer = styled(List.Section)`
    color: #BF4F74;
    flex: 1;
`

const ListSubTitle = styled(List.Subheader)`
    text-align: center;
    color: ${({theme}) => theme.colors.error || "#fff"};
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


function RestaurantScreen({navigation}) {

    const {restaurants, isLoading} = useContext(RestaurantContext)

    const {favourites} = useContext(FavouriteContext)
    const [isToggle, setIsToggle] = useState(false)

    // console.log("Fav =>",favourites)
    // const navigation=useNavigation()

    if (isLoading) {

        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size={50} animating={true} color={MD2Colors.red800}/>
            </View>
        )
    }

    console.log("TOttle Status", isToggle)
    console.log("fav", favourites)

    return (

        <View style={styles.container}>

            <Search
                isFavouritesToggled={isToggle}
                onFavouriteToggle={() => setIsToggle(!isToggle)}
            />

            {isToggle && <FavouritesBar favourites={favourites}/>}

            <RestaurantListContainer>


                {/*<ListSubTitle>My Restuarant List</ListSubTitle>*/}

                <StyledFlatList
                    data={restaurants}
                    renderItem={({item}) => {
                        return (
                            <CardWrapper>
                                <Pressable android_ripple={{color: 'rgba(220,41,41,0.6)'}}
                                           onPress={() => navigation.navigate("RestaurantDetail", {item})}>
                                    <FadeInView style={styles.container}>
                                        <RestaurantInfo restaurant={item}/>
                                    </FadeInView>
                                </Pressable>
                            </CardWrapper>
                        )
                    }}
                    keyExtractor={(item) => item.placeId}

                />

            </RestaurantListContainer>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default RestaurantScreen;