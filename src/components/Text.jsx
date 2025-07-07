import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styled} from "styled-components/native";

const defaultTextStyle = (theme) => {
    return (
        `
        font-family:${theme.fontFamily.monstserrat.regular};
        font-weight:${theme.fontWeight.regular};
        color:${theme.colors.text};
        flex-wrap:wrap;
        margin-top:0px;
        margin-bottom:0px
        
        `
    )
}

const body = (theme) => {
    return (
        `
        `
    )
}

const label = (theme) => `
    font-family:${theme.fontFamily.monstserrat.regular};
    font-size:${theme.fontSize.medium};
    font-weight:${theme.fontWeight.regular};
`

const caption = (theme) =>`
        font-size:${theme.fontSize.medium};
        font-weight:${theme.fontWeight.regular};
 `


const hint = (theme) => `
        font-size:${theme.fontSize.medium};
`


const error = (theme) =>`
        color:${theme.colors.error};
`

const variants = {
    body,
    label,
    caption,
    error,
    hint
}

export const StyledText=styled(Text)`

    ${({theme})=>defaultTextStyle(theme)};
    ${({variant,theme})=>variants[variant](theme)};
    
`

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
