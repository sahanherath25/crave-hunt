import React from 'react';
import {styled} from "styled-components/native";
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const StyledImage=styled.ImageBackground.attrs({
    source:require('../../../../assets/055 home-bg.jpg'),
    resizeMode:"cover"
})`
    //align-items: center;
    //justify-content: center;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;

`

export const AccountCover=styled.View`
    position: absolute;
    //top: 0;
    //left: 0;
    //right: 0;
    //bottom: 0;
    //width: 100%;
    //height: 100%;
    
    //background-color: rgb(255,255,255,0.3);
`

export const AccountContainer=styled.View`
    width: 80%;
    height: auto;
    justify-content: center;
    background-color: rgb(237, 240, 246);
    padding: ${({theme}) => theme.spacing.large}px;
    margin-top: ${({theme}) => theme.spacing.medium}px;
    z-index: 20;
    //border: 1px solid #54e30c;

`

export const AuthButton=styled(Button).attrs({

//     Setting Attributes For Custom Styled Component

})`
    color: ${({theme})=>theme.colors.primary};
    padding: ${({theme})=>theme.spacing.small}px;
    

`

export const Title=styled.Text`
    font-size: 30px;

`

 function AccountBackground({children}) {
    return (
            <StyledImage >
                {children}
            </StyledImage>
    )
}

export default AccountBackground;


