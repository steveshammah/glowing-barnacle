import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>The Good Company Ke</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "white",
        padding: 20,
        color: "white",
        width: 400,
        position: "absolute",
        top: 0,
        left: 0,
        right:0,
        zIndex: 999
    },
    headerText: {
        color: "black",
        textAlign: "center",
        fontWeight: '900',
        textTransform: "uppercase"
    }
});

export default Header;
