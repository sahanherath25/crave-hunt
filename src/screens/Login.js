import React, {useContext} from 'react';
import { Text, View,StyleSheet,Button} from 'react-native';
import {RestaurantContext} from "../context/restaurant";



 function Login({navigation}) {

     const state=useContext(RestaurantContext);

     // console.log(state);

    return (

        <View style={styles.container}>
            <Text> Welcome to my App</Text>
            <Button title="Login" onPress={()=>navigation.navigate("MiniTabs")} />
        </View>

    )

}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

Login.defaultProps = {

}

export default Login;