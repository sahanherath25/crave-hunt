import React from 'react';
import AccountBackground, {AccountContainer, AccountCover, Title} from "../components/AccountBackground";
import LoginForm from "../components/LoginForm";
import SpecialLoginForm from "./SpecialLoginForm";



function LoginScreen({navigation}) {

    return (

        <AccountBackground>
            <AccountCover/>
            <Title>Crave Crust</Title>
            <AccountContainer>
                {/*<LoginForm/>*/}
                <SpecialLoginForm navigation={navigation} />
            </AccountContainer>
        </AccountBackground>


    )

}

export default LoginScreen;

