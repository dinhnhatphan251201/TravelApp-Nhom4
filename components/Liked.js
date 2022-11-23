import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import colors from "../assets/colors/colors";
// import discoverData from "../assets/data/discoverData";
import Entypo from "react-native-vector-icons/Entypo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTour } from "../redux/tourSlice";
import { useEffect } from "react";

const Liked = ({ navigation }) => {
    const [tours, setTours] = useState([]);
    const toursData = useSelector(selectTour);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(toursData.tours);
        setTours([...toursData.tours.filter((item, index) => item.liked)]);
    }, [toursData.tours]);

    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Details", {
                        item: item,
                    })
                }
            >
                <ImageBackground
                    source={item.image}
                    style={[styles.discoverItem]}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo
                            name="location-pin"
                            size={18}
                            color={colors.white}
                        />
                        <Text style={styles.discoverItemLocationText}>
                            {item.location}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.discoverTitle}>Favourites</Text>
                <View style={styles.discoverItemsWrapper}>
                    <FlatList
                        data={tours}
                        renderItem={renderDiscoverItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
        marginTop: 50,
        marginHorizontal: 20,
    },
    discoverItemsWrapper: {
        flex: 1,
        paddingVertical: 40,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    discoverItem: {
        width: 165,
        height: 250,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
        marginBottom: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontSize: 18,
        color: colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontSize: 14,
        color: colors.white,
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontSize: 32,
    },
});

export default Liked;
