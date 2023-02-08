import { StyleSheet } from "react-native";
import {colors} from "../../../utils/colors";

export const styles = StyleSheet.create({
    mainStyle:{
        padding: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },

    image:{
        width: "100%",
        height: 200,
    },

    titleContainer:{
        marginVertical: 54
    },

    textHook:{
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },

    innerTextHook:{
        color: colors.orange,
        textDecorationLine: "underline",
    },

    footerText: {
        textAlign: "center",
        color: colors.blue,
        marginTop: 20,
        fontSize: 14,
        fontWeight: "bold",
    }
})