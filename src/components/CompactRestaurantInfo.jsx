import React from 'react';
import {Text, Platform} from 'react-native';
import {styled} from "styled-components/native";
import WebView from "react-native-webview";

const MapText = styled.Text``


const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
    
`
const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`
const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
    
`
const isAndroid = Platform.OS === 'android';

function CompactRestaurantInfo({restaurant,isMap}) {

    // TODO Decide Which To Display On Device
    // TODO isMap is used  because we only need to show WebView only in Maps of Android

    const Image = (isAndroid && isMap) ? CompactWebView : CompactImage
    return (
        <Item>
            <Image source={{uri:restaurant.photos[0]}} />
            <Text numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}

export default CompactRestaurantInfo;

