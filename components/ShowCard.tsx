import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { images } from "../assets/images/index";

export interface IshowData{
    id?: number;
    title: string;
    content: string;
    meta: string;
    image?: string;
    [key: string]: any;
}

   
interface ShowCardProps {
    data: IshowData;
    onPress: (data: IshowData) => void;
    rounded?: boolean;
}


const ShowCard = ({ data, rounded }: ShowCardProps) => {
    const navigation = useNavigation();
    const { title, meta, image } = data;
    return (
        
        <TouchableOpacity onPress={() => navigation.navigate('Show', {
         ...data
        })} style={rounded ? styles.circle : styles.card}>
            <Image source={image? image : images.mainLogo} style={rounded ? styles.imageCircle : styles.image} />
          {!rounded &&  <View style={styles.cardDetail}>
                <Text style={styles.title}>{title ? title: 'Get Out Of My House 😡'}</Text>
                <Text style={styles.meta}>{meta ? meta: '#165'}</Text>
            </View>}
        </TouchableOpacity>
        
             
             );
};

export default ShowCard;

const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginLeft: 10,
        height: 170,
        width: 160,

    },
    circle: {
    width: 80,
    height: 80,
    margin: 5,
},
imageCircle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    },
    image: {
       height: 150,
        width: 160,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'contain', 
    },
       cardDetail: {
        borderBottomLeftRadius: 10,
           borderBottomRightRadius: 10,
        },
        title: {
            backgroundColor: 'rgba(33, 37, 41, 0.8)',
            color: '#E9ECEF',
            fontSize: 14,
            fontWeight: 'bold',
            paddingLeft: 5,
        },
        meta: {
            color: '#CED4DA',
            // fontSize: 12,
            paddingLeft: 5,
        // textAlign: 'center',
        backgroundColor: 'rgba(33, 37, 41, 0.8)',
        width: '100%',
    },
});





            