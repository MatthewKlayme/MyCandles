import React, { useState } from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import { styles } from "./styles";

const Input = ({label, placeholder, isPassword}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.mainStyle}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input}/>

                {/* This is how we do an if statement, so only if password is an object, it will show the eye image */}
                {isPassword ? (
                    <Pressable style={styles.eye} onPress={onEyePress}>
                    <Image source={isPasswordVisible ? require("../../assets/eye.png") : require("../../assets/closedEye.png")}/>
                    </Pressable>
                // else do this
                ) : null}
                
            </View>
        </View>

    )
}

export default React.memo(Input);