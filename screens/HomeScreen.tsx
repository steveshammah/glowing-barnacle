import { StyleSheet, ScrollView,Text, SafeAreaView, View, } from "react-native";
import Header from "../components/Header";
import { shows, team } from '../assets/database';
import CategorySlider from '../components/CategorySlider';
import { useLayoutEffect } from 'react';

const image = {
  uri: 'https://images.pexels.com/photos/5061702/pexels-photo-5061702.jpeg?cs=srgb&dl=pexels-fringer-cat-5061702.jpg&fm=jpg',
  width: 120,
  height: 250,
  resizeMode: "contain"
};

export default function HomeScreen({navigation}) {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     header: () => (
  //       <Header />
  //     ),
  //   });
  // }, [navigation]);
  
  return (
    <View style={{flex: 1}} >
    <SafeAreaView style={styles.app}>
      <Header />
    <ScrollView style={styles.app} keyboardShouldPersistTaps='handled'  nestedScrollEnabled={true}>
      {/* <Header /> */}
      
        <Text style={styles.landingText}>
          Discover
        </Text>
      
        <CategorySlider heading="Creators" data={team} rounded/>  
        <CategorySlider heading={'Channels'} data={shows} />
        <CategorySlider heading={'Artists'} data={team} />
      <CategorySlider heading={'Podcasts'} data={shows} rounded />
        <CategorySlider heading={'Music'} data={shows} />
        <CategorySlider heading={'Events'} data={shows} />
      
      
    </ScrollView>
      </SafeAreaView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#212529",
    color: '#fff'
  },
  landingSection: {
    height: 180,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  landingText: {
    color: '#f1faee',
    textAlign: "center",
    fontSize: 30,
    fontWeight: '900',
    padding: 3
  }  ,
  content: {
    padding: 10,
    flex: 1,
    marginBottom: 50,
  },
  creatorSection: {
    height: 90,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  }
});




















