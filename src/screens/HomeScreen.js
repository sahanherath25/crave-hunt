import React, {useState} from 'react';
import {Text, View, StyleSheet, Button as NativeButton, FlatList, SafeAreaView} from 'react-native';
import {List, Searchbar, Button} from "react-native-paper";

import {useTheme,styled} from "styled-components/native";
import RestaurantInfo from "../features/restaurants/components/RestaurantInfo";
import restaurants from "../data/restaurantsData";
import TestScreen from "./TestScreen";


const SearchContainer = styled.View`
    
`
const StyledText = styled.Text` 
    color: #BF4F74;
`
const RestaurantListContainer = styled(List.Section)` 
    color: #BF4F74;
    flex: 1;
    border-width: 1px;
    border-color: #ed1616;
    border-style: solid;

`
const ListSubTitle = styled(List.Subheader)`
    text-align: center;
    color: ${({theme})=>theme.colors.error||"#fff"};
`
const ListItem = styled(List.Item)` 
    color: mediumpurple;

`
const ListIcon = styled(List.Icon)` 

`

const StyledFlatList=styled(FlatList).attrs({
    contentContainerStyle:{
        padding:4
    }
})``


function HomeScreen({navigation}) {

    const [searchQuery, setSearchQuery] = useState('');

    const theme=useTheme()


    return (
        // <SafeAreaView style={{ flex: 1, padding: 0, margin: 0 }}>

        <View style={styles.container}>

            {/*<Text style={{color:theme.colors.error,fontFamily:theme.fontFamily.monstserrat.regular}}> THis is Them  Styling</Text>*/}


            <SearchContainer>
                <Searchbar
                    traileringRippleColor={"#FF3F33"}
                    showDivider={true}
                    elevation={5}
                    style={styles.search}
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    colo
                    placeholderTextColor={"#333446"}
                />
            </SearchContainer>


            <NativeButton color={"#090808"} title={"Test"} onPress={() => {
                navigation.navigate("restaurant")
            }}/>


            {/*<StyledText>Hello Sahan</StyledText>*/}

            <RestaurantListContainer>
                <ListSubTitle>My Restuarant List</ListSubTitle>
                {/*<ListItem title="KCF" description="Item description" left={() => <ListIcon icon="folder"/>}/>*/}
                {/*<ListItem title="McDonalds" description="Item description" left={() => <ListIcon icon="folder"/>}/>*/}
                {/*<ListItem title="McDonalds" description="Item description" left={() => <ListIcon icon="folder"/>}/>*/}

                {/*<FlatList data={restaurants}*/}
                {/*          renderItem={({item})=>{*/}
                {/*              return (*/}
                {/*                  <RestaurantInfo restaurant={item}/>*/}
                {/*              )*/}
                {/*          }}*/}
                {/*          c*/}
                {/*          keyExtractor={(item)=>item.id}*/}
                {/*          contentContainerStyle={{padding:15}}*/}
                {/*/>*/}

                {/*<StyledFlatList*/}
                {/*    data={restaurants}*/}
                {/*    renderItem={({item}) => {*/}
                {/*        return (*/}
                {/*            <RestaurantInfo restaurant={item}/>*/}
                {/*        )*/}
                {/*    }}*/}
                {/*    keyExtractor={(item)=>item.id}*/}

                {/*/>*/}

            </RestaurantListContainer>



        </View>
        // </SafeAreaView>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5
    },
    listContainer: {

    },
    search: {
        backgroundColor: "#fff",
        color: "#89c54e",
        marginBlockEnd: 5
    }
})


export default HomeScreen;