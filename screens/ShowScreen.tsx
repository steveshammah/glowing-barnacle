import { View, ScrollView, Text, TouchableOpacity, FlatList, Alert, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {ArrowLeftIcon } from 'react-native-heroicons/solid'
import CategorySlider from "../components/CategorySlider";
import useYoutube from "../hooks/useYoutube";
import Card from "../components/Card";
import { shows } from "../assets/database";
import { IshowData } from "../components/ShowCard";



const ShowScreen = ({navigation, route}) => {
    const [episodes, setEpisodes] = useState<IshowData[]>([]);
    const [activeTab, setActiveTab] = useState<string>('latest');
    const { title, about, image, cover } = route.params
   
    
    const { channelVideos } = useYoutube(title);
    
    useEffect(() => {
        setEpisodes(channelVideos);
        
        !channelVideos && Alert.alert('No content found' + title);
        
    
      return () => {
        
      };
    }, [episodes]);
    
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => {
                navigation.goBack()
            }
        }>
                <ArrowLeftIcon size={20} color={'#212529'} />
                </TouchableOpacity>
            <ImageBackground source={image} style={styles.image} >
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>
            <View style={styles.intro}>
                <Text style={styles.introText}>{about? about : `Something catchy and nice about the channel. Including the host and guests if any. #${title}`}</Text>
            </View>
            <View style={styles.tabs}>
                  <TouchableOpacity onPress={()=> setActiveTab('latest')}>
                <Text style={activeTab === 'latest'? styles.activeTab : styles.tab}>Latest</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setActiveTab('favorites')}>
                <Text style={activeTab === 'favorites'? styles.activeTab : styles.tab}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setActiveTab('suggested')}>
                <Text style={activeTab === 'suggested'? styles.activeTab : styles.tab}>Suggested</Text>
                </TouchableOpacity>
               
            </View>
            <View style={styles.content}>
           {activeTab === 'latest' && <FlatList data={episodes} renderItem={({ item }) => (
                    <Card data={item} key={Math.random() * 10000} />
                )} />
                }

                     {activeTab === 'favorites' && <FlatList data={episodes} renderItem={({ item }) => (
                    <Card data={item} key={Math.random() * 10000} />
                )} />
                }

                {activeTab === 'suggested' &&
                    <ScrollView>
                        <CategorySlider heading={'Channels'} data={shows} rounded/>
                        <CategorySlider heading={'For You'} data={episodes} />
                        <CategorySlider heading={'New Release'} data={episodes} />
                        </ScrollView>
                }
            </View>
        
      </ScrollView>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212529',
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 5,
        padding: 5,
        zIndex: 1,
        borderRadius: 100,
        backgroundColor: '#F8F9FA',
    },
    image: {
        width: "100%",
        height: 200,
        opacity: 0.8,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: 'left',
        width: "100%",
        position: "absolute",
        bottom: 10,
        paddingLeft: 10,
    },
    cardContainer: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
    },
    
    intro: {
        // paddingTop: 5,
        // paddingBottom: 10,
        padding: 10,
    },
    introText: {
        fontSize: 14,
        color: '#fdfffc',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        // backgroundColor: '#F8F9FA',
        marginTop: 10,
        marginBottom: 10,
        width: "70%",
    },
    tab: {
        fontSize: 16,
        color: '#F8F9FA',
        textAlign: 'center',
        padding: 5,
    },
    activeTab: {
        fontSize: 16,
        color: '#F8F9FA',
        // width: 0,
        borderBottomWidth: 2,
        borderBottomColor: '#01adee',
        padding: 5,
          
    },
    content: {
        flex: 1,
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'red',
    },
}
);


export default ShowScreen;
