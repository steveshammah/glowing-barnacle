import * as WebBrowser from 'expo-web-browser';
import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';


interface CardProps {
  title: string;
  content: string;
}

const Card:FC<CardProps> = ({title,content, children}) => {
  return (
    <View style={styles.card}>
      <View style={styles.getStartedContainer}>
        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text> */}

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
          <MonoText>{title}</MonoText>
        </View>

        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text> */}
      </View>
        <View style={styles.helpContainer}>
          <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.helpLinkText} >
              {content + '. ' + content}
            </Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#a30000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: '#a30000',
    borderStyle: 'solid',
    overflow: 'hidden',
    // position: 'relative',
  },
  getStartedContainer: {
    // alignItems: 'center',
    // marginHorizontal: 50,
    // marginBottom: 20,
    
  },
  homeScreenFilename: {
    marginVertical: 10,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    // marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
    color: 'black',
  },
});


export default Card;