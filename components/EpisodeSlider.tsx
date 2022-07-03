import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import { images } from "../assets/images/index";



const EpisodeSlider = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>New Episodes</Text>
            <PagerView style={styles.browser} initialPage={0}>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={styles.card}>
                        <View>

                        <Image source={images.theMicsAreOpen} style={styles.imageSquare} />
                        <View style={styles.cardDetail}>
                            <Text style={styles.contentTitle}>The Mics Are Open</Text>
                            <Text style={styles.contentDescription}>Get Out Of My House 😡</Text>
                            <Text style={styles.contentMeta}>#165</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableHighlight style={styles.card}>
                        <View>

                        <Image source={images.lockdownSessions} style={styles.imageSquare} />
                        <View style={styles.cardDetail}>
                            <Text style={styles.contentTitle}>The Lockdown Session</Text>
                            <Text style={styles.contentDescription}>CNG The DJ | DJ Dream</Text>
                            <Text style={styles.contentMeta}>#165</Text>
                        </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableOpacity style={styles.card}>
                    <View>
                        <Image source={images.lockdownSessions} style={styles.imageSquare} />
                        <View style={styles.cardDetail}>
                            <Text style={styles.contentTitle}>The Wake Up Call</Text>
                            <Text style={styles.contentDescription}>Grauchi</Text>
                            <Text style={styles.contentMeta}>#78 SUNGBA</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            </PagerView>

        </View>
    )
};

export default EpisodeSlider;

const styles = StyleSheet.create({
    container: {
        marginTop: 20, 
        marginBottom: 20,
        flex: 1,
    },
    browser: {
        height: 250,
        width: '100%',
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        marginRight: 10,
        marginLeft: 10,

    },
    imageSquare: {
        height: 180,
        width: 180,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'contain',

    },
    cardDetail: {
        // backgroundColor: 'whitesmoke',
        width: 180,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    contentTitle: {
        fontSize: 16,
        color: '#F8F9FA',
        fontWeight: 'bold',
        padding: 5,
        // marginTop: 10,
        // marginBottom: 10,
    },
    contentDescription: {
        color: '#E9ECEF',
    },
    contentMeta: {
        color: '#DEE2E6',
    }
    
});
