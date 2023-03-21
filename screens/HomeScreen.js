import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "twrnc";
import {NAV_EVENTS, NAV_MAPS, NAV_MOVIES} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

function Multiskoop ()  {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Multiskoop - De Ultieme Bioscoopervaring</Text>
            <Image style={styles.image} source={require('../assets/cinema.jpg')} />
            <Text style={styles.text}>
                Bij ons in Multiskoop ben je verzekerd van een onvergetelijke bioscoopervaring. Of je nu op zoek bent naar een actiefilm, romantische komedie of een dramafilm, wij hebben voor ieder wat wils. Onze state-of-the-art faciliteiten bieden je een kristalhelder beeld en geluid van topkwaliteit, zodat je helemaal opgaat in de film. Maak je ervaring compleet met onze uitgebreide selectie aan snacks en drankjes. Ontdek zelf waarom Multiskoop de nummer één keuze is voor bioscoopgangers en wij zien je graag snel bij ons!


            </Text>
        </View>
    );
}


function HomeNavButton({navLink, iconName}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.buttonOpacity} onPress={() => navigation.navigate(navLink)}>
            <FontAwesome5 name={iconName} size={32} color="white" />
        </TouchableOpacity>
    );
}

function HomeScreenButtons() {
    return (
        <View style={styles.navbar}>
            <HomeNavButton navLink={NAV_MOVIES} iconName="video" />
            <HomeNavButton navLink={NAV_EVENTS} iconName="calendar-alt" />
            <HomeNavButton navLink={NAV_MAPS} iconName="map-marker" />
        </View>
    );
}

export function HomeScreen() {
    return (
        <>
            <Multiskoop/>
            <HomeScreenButtons />
        </>
    );
}

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonOpacity: {
        padding: 10,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        paddingHorizontal: 20,
    },
});
