import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import {styled, useTheme} from "styled-components/native";

// const sizeVariant={
//     small:1,
//     medium:2,
//     large:3,
// }
const positionVariant={
    top:"margin-top",
    left:"margin-left",
    right:"margin-right",
    bottom:"margin-bottom",
}


// TODO Inline rendering like this can cause issue sometimes on android

function getVariant(position, size,theme) {
    const property=positionVariant[position];
    const value=theme.sizes[size];
    // console.log("PROPERTY ",property)
    // console.log("VALUE ",value)
   return  `${property}:${value}`;
}

// TODO Solution

const SpacerView=styled.View`
    ${({variant})=>variant}
`

//
// export  const Spacer=styled.View`
//
//      ${({position,size,theme})=>getVariant(position,size,theme)
// `

export  const Spacer=({position,size})=>{
    const theme=useTheme();
    const variant=getVariant(position,size,theme);
    // console.log("VARIANT ",variant);
    return(
        <SpacerView variant={variant}/>
    )
}








 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default Spacer;