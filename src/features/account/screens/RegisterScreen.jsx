import React from 'react';
import AccountBackground, {AccountContainer, AccountCover} from "../components/AccountBackground";
import RegisterForm from "../components/RegisterForm";
import {Text} from "react-native";


function RegisterScreen() {

    return (

        <AccountBackground>
            <AccountCover/>
            <AccountContainer>
                <RegisterForm/>
            </AccountContainer>
        </AccountBackground>

    )

}





export default RegisterScreen;