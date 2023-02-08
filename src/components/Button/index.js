import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {styles} from "./styles";

const Button = ({title, onPress, style}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.btnStyle, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button);