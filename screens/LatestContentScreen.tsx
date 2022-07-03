import React, { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import EpisodeSlider from "../components/EpisodeSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowCard from "../components/ShowCard";
import { images } from "../assets/images/index";





const LatestContentScreen = () => {
    const [data, setData] = useState({
        id: 1,
        content: "",
        secondaryText: 'Every Friday at 7:00pm',
    });
    const contentData = useCallback(() => {
        try {
            setInterval(async() => {
            const response = await fetch('https://api.quotable.io/random');
            const responseData = await response.json();
            setData((prevData) => ({ ...prevData, content: responseData.content}));
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
                <TouchableOpacity style={styles.cardContainer}>
                    <ShowCard data={data} />
                </TouchableOpacity>
                        <View style={{flex: 1}}>
                            <Text style={styles.subtitle}>Browse by Genre</Text>
                            <PagerView style={styles.mainCardBrowser} initialPage={0}>

                                <View style={styles.imageWrapper}>
                                    <Text style={styles.imageText}>Podcast</Text>
                                    <Image source={images.theMicsAreOpen} style={styles.image} />
                                </View>
                                <View style={styles.imageWrapper}>
                                    <Image source={images.mainLogo} style={styles.image} />
                                </View>
                                <View style={styles.imageWrapper}>
                                    <Image source={images.lockdownSessions} style={styles.image} />
                                </View>
                               
                            </PagerView>

                        </View>
                        
                        <EpisodeSlider />
                        <EpisodeSlider />
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
