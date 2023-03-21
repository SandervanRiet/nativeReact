import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "twrnc";
import {NAV_EVENTS, NAV_HOME, NAV_MOVIES} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


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
            <HomeNavButton navLink={NAV_HOME} iconName="home" />
            <HomeNavButton navLink={NAV_MOVIES} iconName="video" />
            <HomeNavButton navLink={NAV_EVENTS} iconName="calendar-alt" />
        </View>
    );
}

export function HomeScreen() {
    return (
        <>
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
});
