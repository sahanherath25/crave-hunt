import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AuthenticationContext} from "../../../context/authtication";



function SettingsScreen() {

    const {signOut,error}=useContext(AuthenticationContext);

    return (
        <View style={styles.container}>
            <Text>Settings!</Text>
            <Button title={"Log Out"} onPress={signOut} />
        </View>
    );
}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default SettingsScreen;