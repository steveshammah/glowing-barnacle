import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";

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
      
    <FlatList data={sideNaveItems} renderItem={({ item }) => <Text key={uuid()}>{item}</Text>} />
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
