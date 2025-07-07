import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styled} from "styled-components/native";
import {Searchbar} from "react-native-paper";
import {LocationContext} from "../../../context/location";

const SearchContainer = styled.View`
    position: absolute;
    z-index: 999;
    top: 10px;
    width: 100%;
`


function MapSearchBar({}) {

    const {search, keyword} = useContext(LocationContext);
    const [searchQuery, setSearchQuery] = useState(keyword);
    

    console.log("Typing in map ", keyword);

    useEffect(() => {

        setSearchQuery(keyword);
    }, [keyword]);

    return (

        <SearchContainer value={"test"}>
            <Searchbar
                icon={"map"}
                traileringRippleColor={"#FF3F33"}
                showDivider={true}
                elevation={5}
                style={styles.search}
                placeholder="Search For a Location"
                onSubmitEditing={() => {

                    search(searchQuery)

                }}
                onChangeText={(text) => {
                    setSearchQuery(text);
                }}
                value={searchQuery}
                colo
                placeholderTextColor={"#333446"}
            />
        </SearchContainer>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        marginTop:10,
        color: "#89c54e",
        marginBlockEnd: 5
    }
})

export default MapSearchBar;