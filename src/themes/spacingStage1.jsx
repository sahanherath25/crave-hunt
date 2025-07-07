import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import {styled} from "styled-components/native";


const TopSmall=styled.View`
    margin-top:${(props)=>props.theme.sizes.small};
`;

const TopMedium=styled.View`
    margin-top:${(props)=>props.theme.sizes.medium};
`;

const TopLarge=styled.View`
    margin-top:${(props)=>props.theme.sizes.large};
`;

const LeftSmall=styled.View`
    margin-left:${(props)=>props.theme.sizes.small};
`;

const LeftMedium=styled.View`
    margin-left:${(props)=>props.theme.sizes.medium};
`;

const LeftLarge=styled.View`
    margin-left:${(props)=>props.theme.sizes.large};
`;



function Spacer({variant}) {

    if(variant==="top.small"){
        return <TopSmall/>
    }

    if(variant==="top.medium"){
        return <TopMedium/>
    }

    if(variant==="top.large"){
        console.log("test return LArge")
        return <TopLarge/>
    }

    if(variant==="left.small"){
        return <LeftSmall/>
    }

    if(variant==="left.medium"){
        return <LeftMedium/>
    }

    if(variant==="left.large"){
        return <LeftLarge/>
    }

    return (
        <TopSmall/>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default Spacer;