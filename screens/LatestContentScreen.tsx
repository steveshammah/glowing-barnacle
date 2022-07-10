import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowCard, { IshowData } from "../components/ShowCard";
import { images } from "../assets/images/index";
import CategorySlider from "../components/CategorySlider";
import { shows } from "../assets/database";





const LatestContentScreen = () => {
    const [data, setData] = useState<IshowData>({
        id: 1,
        content: "",
        meta: 'Every Friday at 7:00pm',
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
        <ScrollView >
            <View style={styles.content}>
                <TouchableOpacity style={styles.cardContainer}>
                    <ImageBackground source={images.mainLogo} style={styles.cardImage}>
                        <Text style={styles.cardText}>
                            {data.content}
                        </Text>
                        <Text style={styles.meta}>
                            {data.meta}
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                        

                <View style={{flex: 1}}>
                    <Text style={styles.subtitle}>Browse by Genre</Text>
                    <FlatList  data={shows} renderItem={({ item }) => (
                        <TouchableOpacity style={styles.imageWrapper} key={Math.random() * 1000}>
                            {/* <Text style={styles.imageText}>Podcast</Text> */}
                            <Image source={item.image} style={styles.image} />
                        </TouchableOpacity>
                            )
                        }
                        horizontal showsHorizontalScrollIndicator={false}  />
                </View>
                <CategorySlider heading={'New Release'} data={shows} />
            
            </View>
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

    mainCardBrowser: {
        height: 150,
        
    },
    imageText: {
        fontSize: 20,
        color: '#CED4DA',
        textAlign: 'center',
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
    cardImage: {
        height: '100%'
    }, 
    cardText: {
        color: '#f1faee',
        fontSize: 24
    },
    meta: {
        fontSize: 14,
      color: '#F8F9FA'  
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginLeft: 20,
        height: 170,
        width: 250,
    },
    image: {
        height: 150,
        borderRadius: 10,
        width: 300,
        resizeMode: 'contain',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
 
 
});


export default LatestContentScreen;
