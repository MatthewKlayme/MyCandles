import { StyleSheet } from "react-native";
import {colors} from "../../../utils/colors";

export const styles = StyleSheet.create({
    mainStyle:{
        padding: 24,
    },

    agreement: {
        flexDirection: "row",
        alignItems: "center",
    },

    agreeMessage:{
        color: colors.blue,
        marginLeft: 10,
    },

    terms:{
        fontSize: 16,
        fontWeight: "bold"
    },

    btn:{
        marginTop: 20
    },

    footerText: {
        color: colors.blue,
        marginVertical: 16,
        textAlign: "center"
    },

    footerLink: {
        fontSize: 16,
        fontWeight: "bold"
    },

})
