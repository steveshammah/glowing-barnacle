import { FlatList,  StyleSheet, Text, View } from "react-native";
import ShowCard from "./ShowCard";
import { useNavigation } from "@react-navigation/native";

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
            <FlatList horizontal  showsHorizontalScrollIndicator={false} data={data} renderItem={({ item }) => (<ShowCard data={item} onPress={handleCardClick} key={'show-card' + Math.random() * 1000 } rounded={rounded} />)}  />
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
