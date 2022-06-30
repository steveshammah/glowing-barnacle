import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Contact Us</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: "black",
        padding: 20,
        color: "white",
        position: "absolute",
        width:400,
        bottom: -500,
        left: 0,
        right: 0
    },

    footerText: {
        color: "white",
        textAlign: "center"
    }
});

export default Footer;
