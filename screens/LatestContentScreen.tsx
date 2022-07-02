import React, { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowCard from "../components/ShowCard";
import SideNav from "../components/SideNav";
// import { Text, View } from "../components/Themed";

const image = {
    uri: "https://images.pexels.com/photos/6631428/pexels-photo-6631428.jpeg"
    };

const LatestContentScreen = () => {
    const [randomText, setRandomText] = useState('Some Random Text');
    const contentData = useCallback(async () => {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setRandomText(data.content);
    }, []);
    
    
    useEffect(() => {
        setInterval(() => {
            contentData()
        }, 10000);
    }
    , [contentData]);
    
    return (
        <View>
            <Header />
            <ScrollView>
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                        <PagerView style={styles.pagerView} initialPage={0}>
                            {/* <Image source={image} style={styles.image} /> */}
                            {/* <Text style={styles.randomText}>{randomText}</Text> */}
                            <ShowCard text={randomText} />
                            <ShowCard text={randomText} />
                            <ShowCard text={randomText} />
                </PagerView>
            </View>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
            </View>
            <Footer />
            </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        height: 900, 
    },
    sliderContainer: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: 400,
        backgroundColor: 'lime',
        paddingTop: 70

    },
    slider: {
        backgroundColor: 'red',
        height: 250,
        width: 400,
        padding: 20
    },
    pagerView: {
        flex: 1,
        // direction: 'rtl',
        // backgroundColor: 'red',
        // height: 400,
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: "cover",
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        // width: '80%',
    },
    randomText: {
        fontSize: 24,
        fontWeight: '900',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'black',
        // position: 'absolute',
        // top: '25%',
        
        // transform: '',
    }
});


export default LatestContentScreen;