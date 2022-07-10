import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const SideNav = () => {
    const sideNaveItems = [
        'Search',
        'Music',
        'Radio',
        'Events',
        'G-Spot',
        'About',
    ];
    const otherLinks = [
        'Settings',
        'Help',
        'Logout',
    ];
    return <View style={styles.container}>
      
    <FlatList data={sideNaveItems} renderItem={({ item }) => <Text key={'item'+ (Math.random() *100)}>{item}</Text>} />
  </View>;
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#red',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 100,
        left: 0,
        width: 50,
        
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },

});

export default SideNav;
