
// import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { StyleSheet, FlatList, ScrollView, View, Text, Image, SectionList } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from '../components/Card';

const image = {
  uri: 'https://images.pexels.com/photos/5061702/pexels-photo-5061702.jpeg?cs=srgb&dl=pexels-fringer-cat-5061702.jpg&fm=jpg',
  
  width: 120,
  height: 250,
  resizeMode: "contain"


};

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const people = [
    {
      id: 1,
      title: 'Great Title 1',
      content: 'Some content for the card 1. More content for the card 1',
    },
    {
      id: 2,
      title: 'Great Title 2',
      content: 'Some content for the card 2. More content for the card 2.',
    },
    {
      id: 3,
      title: 'Great Title 3',
      content: 'Some content for the card 3. More content for the card 3.',
    },
    {
      id: 4,
      title: 'Great Title 4',
      content: 'Some content for the card 4. More content for the card 4.',
    },
  ]
  return (
    <ScrollView style={styles.app}>
      <Header />
      <View >
        <Text style={styles.landingText}>
          Discover
        </Text>
      <View style={styles.landingSection}>
        <View style={styles.image}>
            {/* <Image source={image} /> */}
          </View>
          <View style={styles.image}>
            {/* <Image source={image} /> */}
          </View>
          <View style={styles.image}>
            {/* <Image source={image} /> */}
          </View>
      </View>
      </View>
      <FlatList data={people} renderItem={(element) => <Card title={element.item.title} content={element.item.content} />} />
        

      
      
      
      {/* <View style={styles.landingSection}>
      </View> */}
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    height: 1000,
    width: 400,
    overflowY: 0,
    // position: 'relative',
    backgroundColor: "#1d3557",
    color: '#fff'
  },
  landingSection: {
    height: 250,
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
    flexDirection: "row",
  },
  image: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    width: 120,
    height: 200,
    borderColor: '#e63946',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#f1faee',
    color: '#fff',
    
  },
  landingText: {
    color: '#f1faee',
    // backgroundColor: '#f1fffa',
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
