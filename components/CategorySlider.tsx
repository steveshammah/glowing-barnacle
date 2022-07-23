import { FlatList,  StyleSheet, Text, View } from "react-native";
import ShowCard from "./ShowCard";
import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";

export interface SliderProps {
    heading: string;
    data: any;
    rounded?: boolean;
}

const CategorySlider = ({ heading, data, rounded }: SliderProps) => {
    const navigation = useNavigation();


    const handleCardClick = (show: any) => {
        navigation.navigate("Show", {
            params: {
                show: show
            }
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <FlatList horizontal  showsHorizontalScrollIndicator={false} data={data} key={uuid()} renderItem={({ item }) => (<ShowCard data={item} onPress={handleCardClick} key={uuid()} rounded={rounded} />)}  />
        </View>
    )
};

export default CategorySlider;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,                  
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10,
        margin: 10,
        
    },
});
