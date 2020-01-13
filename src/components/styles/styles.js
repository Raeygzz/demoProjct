'use strict';

var React = require('react-native');
var { StyleSheet } = React;

const yellow = "darkgrey";
const purple = "#fff";


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
        fontFamily: "Apercu_Regular"
    },
    bold: {
        fontFamily: "Apercu Bold"
    },
    thin: {
        fontFamily: "Apercu Light"
    },
    f500: {
        fontFamily: "Apercu Medium"
    },
    formHeading: {
        fontFamily: "Apercu Bold",
        fontSize: 14,
        lineHeight: 17,
        marginBottom: 30,
        opacity: 0.48
    },
    formHeadingNoMarBot: {
        fontFamily: "Apercu Bold",
        fontSize: 14,
        lineHeight: 17,
        opacity: 0.48
    },
    formGroupTitle: {
        fontFamily: "Apercu Light",
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
