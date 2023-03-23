import React from 'react';
import {View, ScrollView, StyleSheet, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import {useMoviesContext} from "../contexts/MoviesContext";
import {useNavigation} from "@react-navigation/native";
import {NAV_MOVIE_DETAILS} from "../navigation_constants";



function Movie({ movie}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.movieContainer} onPress={() => navigation.navigate(NAV_MOVIE_DETAILS, {movieId: movie.id})}>
            <Image style={styles.image} source={movie.image}/>
            <Text style={styles.name}>{movie.name}</Text>
        </TouchableOpacity>
    );
}

export function MoviesList() {
    const { movies } = useMoviesContext();



    return (
        <View style={styles.moviesContainer}>
            <FlatList
                data={movies}
                keyExtractor={movie => movie.id}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }) => <Movie movie={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    moviesContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    movieContainer: {
        alignItems: 'center',
        width: '30%',
    },
    image: {
        margin: 5,
        borderRadius: 15,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
});
