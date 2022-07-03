import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Header = () => {
    const [search, setSearch] = React.useState(false);

    const handlePress = () => {
        setSearch(!search);
    }
    return (
        <View style={styles.headerContainer}>

        
            {search ? <TextInput placeholder="Search" style={styles.searchInput} /> :
                <Text style={styles.headerText}>The Good Company Ke</Text>
        }
            <EvilIcons name="search" size={30} color="black" onPress={handlePress} />

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {

        backgroundColor: "white",
        height: 40,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,


    },
    headerText: {
        color: "#343A40",
        textAlign: "center",
        fontWeight: '900',
        textTransform: "uppercase"
    },
    searchInput: {
        width: 200,
        height: 40,
        paddingLeft: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        color: "black"

    }
});

export default Header;
