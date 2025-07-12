import {View} from 'react-native';
import {styled} from "styled-components/native";

export const StyledFormContainer = styled.View``

export const FormContainer=({children})=>{

    return(
        <StyledFormContainer>
            {children}
        </StyledFormContainer>
    )

}