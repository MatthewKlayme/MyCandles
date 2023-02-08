import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors";

export const styles = StyleSheet.create({
    mainStyle:{
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22,
    },

    innerContainer: {
        backgroundColor: colors.grey,
        width: "100%",
        height: '100%',
        justifyContent:"center", // center all items within div vertically
        alignItems: "center" // centers all items within div horizontally
    },

    checkIcon: {
        width: 12,
        height: 9,

    }
})