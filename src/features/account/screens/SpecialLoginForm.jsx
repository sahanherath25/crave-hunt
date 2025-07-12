import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Controller, useForm} from "react-hook-form";
import {Button, TextInput} from "react-native-paper";
import {styled} from "styled-components/native";
import {AuthButton} from "../components/AccountBackground";
import Spacer from "../../restaurants/components/Spacer";
import {ErrorText} from "../components/FormComponents";
import {AuthenticationContext} from "../../../context/authtication";


const FormContainer = styled.View`



`



function SpecialLoginForm({navigation}) {

    const {onLogin,error}=useContext(AuthenticationContext);

    const {
        control,
        reset,
        handleSubmit,
        formState: {errors}} = useForm();

    const onFormSubmit=async (data)=>{
        //  TODO Data=== data.fieldName in Each Form Control
        console.log("FORM DATA ",data)
        const {email,password}=data

        console.log("USER Email IS ",email)
        console.log("USER PASSWORD IS ",password)

        const user=await onLogin(email,password)

        // TODO Storing user  in Async Storage


        // reset()
    }

    const onError=(error)=>{
        console.log("ERROR ",error)
    }

    // console.log("FORM ERROR",errors)

    return (

        <FormContainer>

            <Controller
                control={control}
                name="email"
                rules={{required: "Email is Required"}}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        label="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            <Spacer size={"large"} position={"top"}/>

            <Controller
                control={control}
                name="password"
                rules={{required: "Password  is Required"}}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        label="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            { errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            { error && <ErrorText>{error}</ErrorText>}



            <Spacer size={"large"} position={"top"}/>

            <AuthButton
                type="submit"
                icon="lock-open-outline"
                mode="contained"
                onPress={handleSubmit(onFormSubmit,onError)} >

                Login
            </AuthButton>



        </FormContainer>

    )

}



export default SpecialLoginForm;