import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors";

export const styles = StyleSheet.create({
    mainStyle: {
        marginVertical: 20,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
    },

    line: {
        color: colors.lightgrey,
        backgroundColor: colors.lightgrey,
        height: 1,
        flex: 1,
        marginHorizontal: 20,
    },

    text: {
        color: colors.blue,
    },

})