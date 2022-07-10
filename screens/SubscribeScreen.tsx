import { Link } from "@react-navigation/native";
import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EpisodeSlider from "../components/CategorySlider";
import * as WebBrowser from 'expo-web-browser';


const SubscribeScreen = () => {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.intro}>
                <Text style={styles.introText}>Try Premium free for 1 month</Text>
                {/* <EpisodeSlider /> */}
                <Button title='Get Premium'/>
                <Text style={styles.introDescription}> Only Ksh 299/month after. Offer only for users who have subscribed to the <Text onPress={handleHelpPress}>youtube channel.</Text> </Text>
            </View>
            
            <View style={styles.plansContainer}>
                <View style={styles.plan}>

                <View style={styles.header}>
                        <Text style={styles.text}>Mini</Text>
                        <Text style={styles.text}>Ksh 49</Text>
                    </View>
                    <View style={styles.body}>
                        <Text>Weekly plan. Ad-free music listening</Text>
                        <Text>Download music and mixes on one device</Text>
                        <Button title="Subscribe"/>
                        <Text>Terms and conditions apply.</Text>
                        </View>
                </View>
            </View>
        </ScrollView>
  )
};

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://www.youtube.com/user/TheGMONEYTV'
    );
}
export default SubscribeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    intro: {
        height: 300,
        alignItems: 'center',
        backgroundColor:'black'
    },
    introText: {
        fontSize: 20,
        color: 'white'
    },
    introDescription: {
        fontSize: 10,
        color: 'white'
    },

    plansContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    plan: {
        height: 200,
        width: 300,
        backgroundColor: '#E9ECEF',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    text: {
        // color: 'white',
        fontWeight: 'bold',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
        flex: 1,
    }

}
);