import React from "react";
import {View, Image, TouchableOpacity } from "react-native";
import {styles} from "./styles";

const CheckBox = ({checked, onCheck}) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.mainStyle}>
            {checked  ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon}source={require("../../assets/checkBox.png")}/>
                </View>
            ) : null}
        </TouchableOpacity>
    )
}

export default React.memo(CheckBox);