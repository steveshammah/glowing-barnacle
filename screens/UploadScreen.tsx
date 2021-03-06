import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

const UploadScreen = () => {
  return(<View style={styles.container}>
        <Text style={styles.title}>Upload Content</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});


export default UploadScreen;