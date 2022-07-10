import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import EpisodeSlider from "../components/CategorySlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowCard, { IshowData } from "../components/ShowCard";
import { images } from "../assets/images/index";
import content from '../assets/content.json';
import Card from "../components/Card";






const LatestContentScreen = () => {
    const [data, setData] = useState<IshowData>({
        id: 1,
        content: "",
        metaText: 'Every Friday at 7:00pm',
    });
    const contentData = useCallback(() => {
        try {
            setInterval(async() => {
            const response = await fetch('https://api.quotable.io/random');
            const responseData = await response.json();
            setData((prevData:IshowData) => ({ ...prevData, content: responseData.content}));
        }, 5000);
            
        } catch (error) {
            console.log(error);
        }
            
        
    }, []);
    
    
    useEffect(() => {
        contentData()
        
    }
    , []);
    
    return (
        <View style={styles.container} >
            <Header />
            <ScrollView style={{marginTop: 40, padding: 0}}>
        <View style={styles.content}>
            <View style={styles.mainCard}>
                
                    <ShowCard data={data} />                       
              {/* <EpisodeSlider /> */}
              
              <View style={styles.content}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', margin: 10}}>
          New Release
        </Text>

      <FlatList data={content.items.splice(0,8)} renderItem={(element) => <Card element={element} key={'card'+ (Math.random() * 1000)} />} />
      </View>
                        
            </View>
            </View>
            <Footer />
            </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212529',
    },
    content: {
        flex: 1,

    },
    mainCard: {
        
    },
    mainCardBrowser: {
        height: 150,
        
    },
    imageText: {
        fontSize: 20,
        color: '#CED4DA',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        position: 'absolute',
        top: 50,
        zIndex: 999,
    },
    subtitle: {
        fontSize: 20,
        color: '#CED4DA',
        fontWeight: 'bold',
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    cardContainer: {
        height: 250,
    },
 
    imageWrapper: {
        position: 'relative',
        borderRadius: 10,
        alignItems: 'center',
    
    }
    ,
    image: {
        backgroundColor: '#343A40',
        height: 150,
        borderRadius: 10,
        width: '70%',
        resizeMode: 'contain',
    },
 
 
});


export default LatestContentScreen;
