'use strict';

import { Platform, StyleSheet } from "react-native";

const yellow = "#FFBD00";
const purple = "#171635";

module.exports = StyleSheet.create({

    purpleBg: {
        backgroundColor: purple,
    },
    radioChecked: {
        backgroundColor: yellow,
        borderColor: yellow
    },
    rounded: {
        borderRadius: 1000
    },
    yellowBorder: {
        borderColor: yellow,
    },
    p0: {
        padding: 0
    },
    pt0: {
        paddingTop: 0
    },
    dashedBorder: {
        borderColor: "white",
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    globalPadding: {
        paddingHorizontal: 27,
        paddingTop: 50,
        paddingBottom: 34
    },
    br24: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    br24all: {
        borderRadius: 24
    },
    normal: {
        fontFamily: Platform.OS === "ios" ? "Apercu-Regular" : "Apercu_Regular",

    },
    bold: {
        fontFamily: Platform.OS === "ios" ? "Apercu-Bold" : "Apercu Bold"
    },
    thin: {
        fontFamily: Platform.OS === "ios" ? "Apercu-Light" : "Apercu Light"
    },
    f500: {
        fontFamily: Platform.OS === "ios" ? "Apercu-Medium" : "Apercu Medium"
    },
    formHeading: {
        fontFamily: Platform.OS === "ios" ? "Apercu-Bold" : "Apercu Bold",
        fontSize: 14,
        lineHeight: 17,
        marginBottom: 30,
        opacity: 0.48
    },
    formHeadingNoMarBot: {
        fontFamily: Platform.OS === "ios" ? "Apercu-Bold" : "Apercu Bold",
        fontSize: 14,
        lineHeight: 17,
        opacity: 0.48
    },
    formGroupTitle: {
        fontFamily: Platform.OS === "ios" ? "Apercu-Light" : "Apercu Light",
        fontSize: 14,
        lineHeight: 17
    },
    formNotion: {
        opacity: 0.69,
        fontSize: 20,
        lineHeight: 25,
        marginBottom: 24
    },
    textCenter: {
        textAlign: "center"
    },
    colorPrimary: {
        color: "#FFBD00"
    },
    colorWhite: {
        color: "#FFF"
    },
    bgPrimary: {
        backgroundColor: "#FFBD00"
    },
});
