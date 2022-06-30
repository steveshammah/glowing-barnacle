
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { StyleSheet, ImageBackground } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

const image = {
  uri: "https://images.pexels.com/photos/6631428/pexels-photo-6631428.jpeg"
};

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.landingSection}>
        <View style={styles.image}>
          <Text style={styles.landingText}>
            We Are
          </Text>
          <Text style={styles.landingText}>
            The Good Company
          </Text>
        </View>
      </View>
      
      <View style={styles.landingSection}>
        <Text style={styles.landingText}>
          We Build  Brands
        </Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    height: 100,
    backgroundColor: "#fff",
    width: 400,
    overflowY: 0
  },
  landingSection: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    width: 400
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 400,
    opacity: 0.5,
    backgroundColor: '#eee'
  },
  landingText: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: '900'
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
