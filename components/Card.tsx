import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { images } from '../assets/images';
import { HeartIcon, ShareIcon } from 'react-native-heroicons/solid';
import { HeartIcon as OutLineHeartIcon } from 'react-native-heroicons/outline';
import { useState } from 'react';

interface CardProps {
  data: {
    [key: string]: any;
  }

}

const image = {
  uri: 'https://i.imgur.com/wSTFkRM.png',
  width: 80,
  height: 80,
}

const Card = ({ data }: CardProps) => {
  const [heart, setHeart] = useState(false);

  const { title, thumbnails, publishTime } = data.snippet;
  
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader} >
        <Image source={images.mainLogo} style={styles.image} />
        <View style={styles.cardContent}>

        <Text style={styles.headerText}>
          {title}
        </Text>
      <View style={styles.meta}>
        <Text style={styles.date}>
          {new Date(publishTime)
            .toUTCString()
            .slice(0, 16)}
        </Text>
          
        <View style={styles.icons}>
              <TouchableOpacity onPress={() => setHeart(!heart)}>
                {
                  heart ? <HeartIcon size={25} color="#f71735" style={{ marginRight: 15 }} /> : <OutLineHeartIcon size={25} color="#ADB5BD" style={{ marginRight: 15 }} />
                }
         
          </TouchableOpacity>
            <TouchableOpacity>
            <ShareIcon
                size={20}
                color={'#ADB5BD'}
                style={{ marginRight: 15 }}/>
          </TouchableOpacity>
        </View>
     

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
    flex: 1,
    minWidth: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9FA',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flex: 1,
    color: '#fff',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 10,
  },
    image: {
      width: 70,
      height: 70,
      borderRadius: 5,
      objectFit: 'cover',
      borderWidth: 1,
      borderColor: '#ADB5BD',
    },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  date: {
    color: '#ADB5BD',
    fontSize: 12,

  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  }

});


export default Card;