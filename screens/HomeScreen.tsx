import { RootTabScreenProps } from '../types';
import { StyleSheet, FlatList, ScrollView, View, Text, Image, SectionList } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from '../components/Card';
import content from '../assets/content.json';
import { images } from '../assets/images';

const image = {
  uri: 'https://images.pexels.com/photos/5061702/pexels-photo-5061702.jpeg?cs=srgb&dl=pexels-fringer-cat-5061702.jpg&fm=jpg',
  
  width: 120,
  height: 250,
  resizeMode: "contain"


};

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView style={styles.app}>
      <Header />
      <View >
        <Text style={styles.landingText}>
          Discover
        </Text>
      <View style={styles.landingSection}>
        <View style={styles.image}>
            <Image source={images.lockdownSessions} style={styles.image} />
          </View>
          <View style={styles.image}>
            <Image source={images.theMicsAreOpen} style={styles.image} />
          </View>
          <View style={styles.image}>
            <Image source={images.theWakeUpCall} style={styles.image} />
          </View>
          <View style={styles.image}>
            <Image source={images.mainLogo} style={styles.image} />
          </View>
      </View>
      </View>
      <View style={{width: '100%'}}>

      <FlatList data={content.items} renderItem={(element) => <Card element={element} />} />
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    height: 1000,
    backgroundColor: "#212529",
    color: '#fff'
  },
  landingSection: {
    height: 250,
    justifyContent: "space-between",
    alignItems: "center",
    
    flexDirection: "row",
  },
  image: {
    flexDirection: "row",
    width: 120,
    height: 200,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#f1faee',
    color: '#fff',
    
  },
  landingText: {
    color: '#f1faee',
    textAlign: "center",
    fontSize: 30,
    fontWeight: '900',
    padding: 3
  }
});




















//     <View style={styles.container}>
//       <Text style={styles.title}>This is the homepage</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: 'red'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
