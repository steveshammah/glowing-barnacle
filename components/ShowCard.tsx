import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { images } from "../assets/images/index";


   
interface ShowCardProps {
    data: any;
}


const ShowCard = ({data}:ShowCardProps) => {
    return (
        <View key="1" style={styles.card} >
            <ImageBackground source={images.mainLogo} resizeMode="cover" style={styles.image}>
            <Text style={styles.mainText}>{data.content}</Text>
                <Text style={styles.secondaryText}>{data.secondaryText}</Text>
                </ImageBackground>
            </View>   
    );
};

export default ShowCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#212529',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',       
    },
    mainText: {
        backgroundColor: 'rgba(33, 37, 41, 0.8)',
        color: '#E9ECEF',
        fontSize: 24,
        textAlign: 'center',
        flex: 1,
    },
    secondaryText: {
        color: '#CED4DA',
        fontSize: 12,
        textAlign: 'center',
        backgroundColor: 'rgba(33, 37, 41, 0.8)',
        width: '100%',
    },
});




