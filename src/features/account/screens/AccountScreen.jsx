import React from 'react';
import {StyleSheet} from 'react-native';
import AccountBackground, {
    AccountContainer,
    AccountCover,
    AnimationContainer,
    AuthButton,
    Title
} from "../components/AccountBackground";
import Spacer from "../../restaurants/components/Spacer";
import LottieView from "lottie-react-native";


 function AccountScreen({navigation}) {

    return (
            <AccountBackground>
                <AccountCover/>
                <AnimationContainer>
                    <LottieView
                        source={require("../../../../assets/test.json")}
                        style={{width: "100%", height: "100%"}}
                        autoPlay
                        loop
                    />
                </AnimationContainer>

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