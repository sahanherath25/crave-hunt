import React from 'react';
import {StyleSheet} from 'react-native';
import AccountBackground, {AccountContainer, AccountCover, AuthButton, Title} from "../components/AccountBackground";
import Spacer from "../../restaurants/components/Spacer";



 function AccountScreen({navigation}) {

    return (
            <AccountBackground>
                <AccountCover/>
                <Title>Crave Crust</Title>
                <AccountContainer>
                    <AuthButton icon="lock-open-outline"
                                mode="contained"
                                onPress={() => navigation.navigate("Login")}>
                       Login
                    </AuthButton>
                    <Spacer size={"large"} position={"top"}/>
                    <AuthButton icon="lock-open-outline"
                                mode="contained"
                                onPress={() => navigation.navigate("Register")}>
                       Register
                    </AuthButton>
                </AccountContainer>
            </AccountBackground>
    )

}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default AccountScreen;