import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {styled} from "styled-components/native";
import {TextInput} from "react-native-paper";
import AccountBackground, {AuthButton} from "./AccountBackground";
import Spacer from "../../restaurants/components/Spacer";


const FormContainer = styled.View`
    flex-grow: 1;
    justify-content: center;
    //z-index: 30;

`



const EmailField = styled(TextInput)`

    
    //width: 90%;
    //text-align: center;


`

const PasswordField = styled(TextInput)`


`


function LoginForm({}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (email) => {
        console.log(email)
        setEmail(email);
    }
    const handlePassword = (email) => {
        console.log(password)
        setPassword(email);
    }

    const onSubmit = () => {

        if(password.length<0|| !password){
            Alert.alert("Password CAnnot Empty");
            return
        }

        if(email.length<0|| !email){
            Alert.alert("Please Provide a valid email");
            return;
        }


    }

    return (


        <FormContainer>

            <EmailField
                value={email}
                label={"Email"}
                onChangeText={handleEmail}/>
            <Spacer size={"large"} position={"top"}/>
            <PasswordField
                value={password}
                label={"Password"}
                onChangeText={handlePassword}/>
            <Spacer size={"large"} position={"top"}/>
            <Spacer size={"large"} position={"top"}/>
            <AuthButton

                icon="login"
                        mode="contained"
                        onPress={onSubmit}>
                Submit
            </AuthButton>


        </FormContainer>

    )

}


export default LoginForm;