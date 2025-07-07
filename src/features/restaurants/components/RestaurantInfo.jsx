import React from 'react';
import {Text,StyleSheet, Alert, SafeAreaView, FlatList} from 'react-native';
import {Card, Button} from "react-native-paper";
import {SvgXml} from "react-native-svg";
import {StyledText} from "../../../components/Text"

import star from "../../../../assets/star"
import open from "../../../../assets/open"

import styled from "styled-components/native";
import Spacer from "./Spacer";
import Favourite from "./Favourite";


function RestaurantInfo({restaurant}) {

    const {name, icon, photos, address, openingHours, isClosedTemporarily,rating,vicinity,placeId} = restaurant
    const ratingArray=new Array(Math.ceil(rating)).fill(4).map(Number);
    const SafeArea=styled(SafeAreaView)``
    const RestaurantCard = styled(Card)`
        background-color: #fff;
        margin-bottom: 16px;

    `
    const RestaurantCardContent = styled(Card.Content)``

    const RestaurantCardCover = styled(Card.Cover)`
        padding: 5px
    `
    const RestaurantCardTitle = styled(Card.Title)`
        padding: 5px;
        color:#fff;
    `
    const RestaurantCardAction = styled(Card.Actions)`
        padding: 5px
    `

    const Rating=styled.View`
        flex-direction: row;
        padding-block: 4px;
    `

    const Address=styled.Text`
        font-weight: bold;
    `

    const Section=styled.View`
        flex-direction: row;
        justify-content: space-between;
    `

    const SectionEnd=styled.View`
    
    `


    return (

        <RestaurantCard elevation={10}>

            <Favourite restaurant={restaurant}/>
            {/*<RestaurantCardTitle titleStyle={{color:"#090040",}}  subtitleStyle ={{color:"#901E3E",fontWeight:"bold"}} title={name} subtitle={"Card Sub Title"}/>*/}

            <RestaurantCardCover source={{uri: `${photos.length?photos[0]:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}`}} />
            <RestaurantCardContent>
                <Text variant="titleLarge">{name}</Text>

                <Section>
                    <Rating style={{flexDirection:"row"}}>

                        {
                            ratingArray.map((item,index)=>{
                                return(
                                    <SvgXml key={`id-${placeId}-${index}`} xml={star} width={20} height={20}/>
                                )
                            })
                        }
                        {/*<FlatList*/}
                        {/*    horizontal={true}*/}
                        {/*    data={ratingArray} renderItem={({item})=>{*/}
                        {/*    return (*/}
                        {/*<SvgXml xml={star} width={20} height={20}/>*/}
                        {/*       */}
                        {/*    )*/}
                        {/*}}/>*/}
                    </Rating>

                    <Spacer position={"bottom"} size={"large"}/>
                    <StyledText  variant={"body"}>Sahan</StyledText>


                    <SectionEnd>
                        {!isClosedTemporarily &&   <SvgXml xml={open} width={30} height={30}/> }
                    </SectionEnd>

                </Section>
                <Address variant="bodyMedium">{address}</Address>
            </RestaurantCardContent>

            {/*<RestaurantCardAction>*/}
            {/*    <Button*/}
            {/*        icon="close"*/}
            {/*        // icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }}*/}
            {/*        onPress={() => Alert.alert("Fuck You Nigga")}>Cancel</Button>*/}
            {/*    <Button color={"#89c54e"} icon={"check"}>Ok</Button>*/}
            {/*</RestaurantCardAction>*/}

        </RestaurantCard>

        // <Card elevation={5} style={styles.card}>
        //     <Card.Content>
        //         <Text variant="titleLarge">Card title</Text>
        //         <Text variant="bodyMedium">Card content</Text>
        //     </Card.Content>
        //     <Card.Cover style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        //     <Card.Title title={name} subtitle="Card Subtitle" />
        //     <Card.Actions>
        //         <Button
        //             icon="close"
        //             // icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }}
        //             onPress={()=>Alert.alert("Fuck You Nigga")}>Cancel</Button>
        //         <Button color={"#89c54e"} icon={"check"}>Ok</Button>
        //     </Card.Actions>
        // </Card>


    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})


export default RestaurantInfo;