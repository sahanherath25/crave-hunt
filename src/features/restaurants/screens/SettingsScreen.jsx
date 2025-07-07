import React from 'react';
import { Text, View,StyleSheet} from 'react-native';



function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>Settings!</Text>
        </View>
    );
}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default SettingsScreen;