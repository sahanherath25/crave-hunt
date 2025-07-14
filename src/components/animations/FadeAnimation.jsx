import React, {useEffect, useRef} from 'react';
import { Text, View,StyleSheet,Animated} from 'react-native';


export const FadeInView=({duration=1500,children,...props})=>{

    const fadeAnim=useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim,{

            toValue: 1,
            duration:duration,
            useNativeDriver: true
        }).start();


    }, [fadeAnim,duration]);

    return(


        <Animated.View
            style={{
                ...props.style,
                opacity:fadeAnim
            }}
        >
            {children}
        </Animated.View>
    )

}


 function FadeAnimation({}) {

    return (

        <View style={styles.container}>
            <Text> Welcome</Text>
        </View>

    )

}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default FadeAnimation;