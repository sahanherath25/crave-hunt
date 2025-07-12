import {Platform, StyleSheet, StatusBar, ActivityIndicator, View} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/themes/theme";
import {useFonts as useMontserrat} from '@expo-google-fonts/montserrat/useFonts';
import {Montserrat_400Regular} from '@expo-google-fonts/montserrat/400Regular';

import {AuthenticationProvider} from "./src/context/authtication";



import "./src/Services/firebase/firebase"

import RootNavigation from "./src/infastructure/navigation/RootNavigation";


console.log("PROCESS KEY ",process.env.EXPO_PUBLIC_API_KEY)

export default function App() {

    let [fontsLoaded] = useMontserrat({
        Montserrat_400Regular,
    })


    if (!fontsLoaded) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#511D43"/>
            </View>
        );
    }

    return (
        <>
            {Platform.OS === 'ios'}
            <SafeAreaProvider style={styles.container}>
                <AuthenticationProvider>
                                <ThemeProvider theme={theme}>
                                    <ExpoStatusBar style={"auto"}/>
                                    <RootNavigation/>
                                </ThemeProvider>
                </AuthenticationProvider>
            </SafeAreaProvider>
        </>


    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
});


