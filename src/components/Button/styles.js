import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors";

export const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginTop: 10,
        width: '100%'
    },

    title:{
        color: colors.white,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    }
})