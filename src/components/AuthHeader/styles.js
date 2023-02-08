import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors";

export const styles = StyleSheet.create({
    mainStyle:{
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 54
    },

    image: {
        width:18,
        height:18,
    },

    title:{
        color: colors.blue,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16,
    }
})