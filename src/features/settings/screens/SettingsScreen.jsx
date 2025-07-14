import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AuthenticationContext} from "../../../context/authtication";
import {Avatar, List} from "react-native-paper";
import {styled} from "styled-components/native";
import Spacer from "../../restaurants/components/Spacer";
import {FavouriteContext} from "../../../context/favourites";

const SettingsItem = styled(List.Item)`

    padding: ${({theme}) => theme.spacing.medium}px;

`

const AvatarContainer = styled.View`

    align-items: center;
    opacity: 1;
    z-index: 10000;
`
const Caption = styled.Text`
    color: #cf4616;
  
`

function SettingsScreen({navigation}) {

    const {signOut, user} = useContext(AuthenticationContext);
    const {favourites} = useContext(FavouriteContext);

    const userEmail=user?._tokenResponse.email

    // console.log("USER is ", user)
    // console.log("USER Email", userEmail)

    console.log("THIS USERS FAV is ",favourites)

    return (

        <View style={styles.container}>

            <AvatarContainer>
                <Spacer size={"medium"} position={"top"}/>
                <Avatar.Icon icon={"human"} backgroundColor={"#FF894F"} size={180}/>
                <Spacer size={"small"} position={"top"}/>
                {userEmail && <Caption>{userEmail}</Caption>}
            </AvatarContainer>
            <Spacer size={"medium"} position={"top"}/>
            <List.Section>

                <SettingsItem
                    title="Favourites"
                    left={(props) => <List.Icon color={"black"} icon="folder"/>}
                       onPress={()=>navigation.navigate("favourites")}

                />

                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon color={"black"} icon="heart-outline"/>}
                    onPress={signOut}

                />


            </List.Section>



        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default SettingsScreen;