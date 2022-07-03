import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';


interface CardProps {
  element: any;
  // title: string;
  // content: string;
}

const Card: FC<CardProps> = ({ element }) => {
  
  return (
    <View style={styles.card}>
      
    
        <ImageBackground source={element.item.snippet.thumbnails.high.url} style={styles.image}>
          <Text style={styles.title}>{element.item.snippet.title}</Text>
          <Text style={styles.description}>
            {element.item.snippet.description}
        </Text>
        <Text style={styles.meta}>
          {new Date(element.item.snippet.publishTime)
            .toUTCString()
            .slice(0, 16)}
        </Text>
          </ImageBackground>
        


    </View>
  );
}



const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 10,
    margin: 10,

    alignItems: 'center',
  },
  title: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    
  },
  meta: {
    fontSize: 12,
    color: '#6C757D'
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