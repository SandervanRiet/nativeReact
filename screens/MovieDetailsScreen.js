import {useMoviesContext} from "../contexts/MoviesContext";
import {useEffect} from "react";
import {ScrollView, Text, View,StyleSheet} from "react-native";
import WebView from "react-native-webview";



export function MovieDetailsScreen({route}) {
    const {movieId} = route.params;
    const {setActiveMovie, getMovieWithId} = useMoviesContext();
    const movie = getMovieWithId(movieId);

    console.log(`render PlaceDetailsScreen: `, {movieId, movie})

    useEffect(() => {
        console.log(`useEffect PlaceDetailsScreen: `, {movie})
        setActiveMovie(movie);
    }, []);

    return (
        <View style={styles.container}>

            <ScrollView >
                <View style={styles.movieContainer}>
                    <Text style={styles.name}>{movie.name}</Text>
                    <WebView
                        allowsFullscreenVideo={true}
                        source={{ uri: 'https://www.youtube.com/embed/' + movie.video }}
                        style={styles.youtubePlayer}
                    />
                    <Text style={styles.description}>{movie.description}</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailText}>{`Actors: ${movie.actors.join(", ")}`}</Text>
                        <Text style={styles.detailText}>{`Director: ${movie.director}`}</Text>
                        <Text style={styles.detailText}>{`Duration: ${movie.duration}`}</Text>
                        <Text style={styles.detailText}>{`Time: ${movie.time}`}</Text>
                    </View>
                    <Text style={styles.imdbScore}>{`IMDb: ${movie.imdbScore}`}</Text>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    movieContainer: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
    },
    description: {
        fontSize: 16,
        marginBottom: 30,
    },
    details: {
        marginBottom: 10,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 15,
    },
    imdbScore: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    youtubePlayer: {
        height: 250,
        marginBottom: 15,

    },
});
