import React from "react";
import { View, Text } from "react-native";


const image = {
    uri: "https://images.pexels.com/photos/6631428/pexels-photo-6631428.jpeg"
};
    
interface ShowCardProps {
    text: string;
}

const ShowCard = ({text}:ShowCardProps) => {
    return (
            <View key="1" >
            <Text style={{ color: 'red', fontSize: 24 }}>{text}</Text>
            </View>   
    );
};

export default ShowCard;
