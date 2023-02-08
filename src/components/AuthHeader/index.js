import React from "react";
import {View, Pressable, Text, Image } from "react-native";
import {styles} from "./styles";

const AuthHeader = ({title, onBackPress}) => {

    return (
        <View style = {styles.mainStyle}>
            <Pressable hitSlop={5} onPress={onBackPress}>
                <Image style={styles.image} source = {require('../../assets/authBack.png')}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default React.memo(AuthHeader);