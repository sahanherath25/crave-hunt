import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Controller, useForm} from "react-hook-form";
import { TextInput } from 'react-native-paper';
import {FormContainer} from "./FormContainer";
import {AuthButton} from "./AccountBackground";
import Spacer from "../../restaurants/components/Spacer";
import {ErrorText} from "./FormComponents";
import {AuthenticationContext} from "../../../context/authtication";
import {registerRequest} from "../../../Services/authentication/services";


 function RegisterForm({}) {

     const {onRegister,error:formError}=useContext(AuthenticationContext);

     const {
         reset,
         control,
         handleSubmit,
         formState: {errors},
         getValues
     } = useForm();

     const onFormSubmit=async (data)=>{
         //  TODO Data=== data.fieldName in Each Form Control
         console.log("FORM DATA ",data)
         const{email,password}=data
         const newUser=await onRegister(email,password);

         console.log("NEW USER DATA IS ",newUser)
         reset()
     }

     const onError=(error)=>{
         console.log("ERROR ",error)
     }

     console.log("ERRORS SAHAN",formError.message)

    return (

         <FormContainer style={styles.container}>

             <Controller
                 rules={{required: "Email is Required"}}
                 control={control}
                 name={"email"}
                 render={({field:{onChange,onBlur,value}})=>{
                     return(
                         <TextInput
                             label="Email"
                             onChangeText={onChange}
                             value={value}

                         />
                     )
                 }}
             />

             { errors.email && <ErrorText style={{padding:8}}>{errors.email.message}</ErrorText>}

             <Spacer size={"large"} position={"top"}/>

             <Controller
                 rules={{required: "Password is Required"}}
                 control={control}
                 name={"password"}
                 render={({field:{onChange,onBlur,value}})=>{
                     return(
                         <TextInput
                             secureTextEntry={true}
                             label="Password"
                             onChangeText={onChange}
                             value={value}

                         />

                     )
                 }}

             />

             { errors.password && <ErrorText>{errors.password.message}</ErrorText>}
             <Spacer size={"large"} position={"top"}/>

             <Controller
                 rules={
                 {
                     required: "Confirm Password is Empty",
                     validate:(value)=>{
                     //     TODO value === Current value (password)
                        return   value ===getValues("password") || "Password Doesnt Match"
                     },
                     minLength:{
                         value:5,
                         message:"Password must be at least 8 characters"
                     }
                 }}
                 control={control}
                 name={"confirmPassword"}
                 render={({field:{onChange,onBlur,value}})=>{
                     return(
                             <TextInput
                                 secureTextEntry={true}
                                 label="Confirm Password"
                                 onChangeText={onChange}
                                 value={value}

                             />

                     )
                 }}
             />

             { errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}

             {/*{formError&&<ErrorText>{formError}</ErrorText>}*/}

             <Spacer size={"large"} position={"top"}/>

            <AuthButton

                type="submit"
                icon="account-plus"
                mode="contained"
                onPress={handleSubmit(onFormSubmit,onError)}
            >
                Register
            </AuthButton>


        </FormContainer>

    )

}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default RegisterForm;