import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {  SearchIcon, XIcon } from "react-native-heroicons/solid";


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
            
            <SearchIcon  color="black" onPress={handlePress} />
            { !search && <XIcon color="black" onPress={handlePress} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {

        backgroundColor: "white",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 5,
        paddingRight: 20
        
        
    },
    headerText: {
        paddingLeft: 10,
        paddingRight: 10,
        color: "#343A40",
        textAlign: "left",
        fontWeight: '900',
        textTransform: "uppercase",
        width: '90%'
    },
    searchInput: {
        width: '80%',
        height: 40,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        color: "#f1faee",
        backgroundColor: '#212529',

    }
});

export default Header;
