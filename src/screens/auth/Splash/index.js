import React from "react";
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './styles';
import Button from "../../../components/Button";

const Splash = () => {
    return(
        <View style={styles.mainStyle}>
            <Image resizeMode="contain" style={styles.image} source={require("../../../assets/splashImg.png")}/>
            <View style={styles.titleContainer}>
                <Text style={styles.textHook}>Find your favorite</Text>
                <Text style={[styles.textHook, styles.innerTextHook]}>candles</Text> 
                <Text style={styles.textHook}>right here!</Text>
            </View>
            <Button title="Sign Up"/>
            <Pressable hitSlop={2}>
                <Text style={styles.footerText}>
                    Sign In
                </Text>
            </Pressable>
        </View>
    )
}

// using react.memo(), prevents refreshed from happening within the app.js so things build locally and not newly everytime
export default React.memo(Splash);