import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>React Native</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#1d3557",
        padding: 20,
        color: "#f1faee",
        width: 400,
        // position: "absolute",
        top: 0,
        left: 0,
        right:0,
        zIndex: 999
    },
    headerText: {
        color: "#f1faee",
        textAlign: "center",
        fontWeight: '900',
        textTransform: "uppercase"
    }
});

export default Header;
