import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import { 
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic 
} from '@expo-google-fonts/lato';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import profile from '../assets/images/PP.png';
import profile1 from '../assets/images/p1.png';
import profile2 from '../assets/images/p2.png';
import profile3 from '../assets/images/p3.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useFonts} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';


Feather.loadFont();

const Notification = ({navigation}) => {
    let [fontsLoaded, error] = useFonts ({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic 
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ScrollView>
                    {/* Header */}
                    <SafeAreaView>
                        <View style={styles.menuWrapper}>
                            <Feather
                            name="bar-chart-2"
                            size={24}
                            color={colors.black}
                            style={{
                                marginTop: 18, transform: [{rotate: '90deg'}]}}
                            />
                            <Text style={styles.titleHeader}>Notification</Text>
                            <Image source={profile} style={styles.profileImage} />
                        </View>
                    </SafeAreaView>

                    {/* NotificationPerDay */}
                    <View style={styles.NotificationDayContainer}>
                        <Text style={styles.dayTitle}>Today</Text>
                        <View style={styles.PerNotification}>
                            <Image source={profile1} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Michael Mownkins </Text>
                                    <Text style={styles.textDesc}> Followed you</Text>
                                </View>
                                <Text style={styles.subText}>Just now</Text>
                            </View>
                        </View>
                        <View style={styles.PerNotification}>
                            <Image source={profile2} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Klement Visc </Text>
                                    <Text style={styles.textDesc}> Like your content</Text>
                                </View>
                                <Text style={styles.subText}>3m</Text>
                            </View>
                        </View>
                        <View style={styles.PerNotification}>
                            <Image source={profile3} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Rachel </Text>
                                    <Text style={styles.textDesc}> Commented on your content</Text>
                                </View>
                                <Text style={styles.subText}>4m</Text>
                            </View>
                        </View>
                    </View>

                    {/* NotificationPerDay */}
                    <View style={styles.NotificationDayContainer}>
                        <Text style={styles.dayTitle}>01 Januari 2023</Text>
                        <View style={styles.PerNotification}>
                            <Image source={profile1} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Nail </Text>
                                    <Text style={styles.textDesc}> Commented on your content</Text>
                                </View>
                                <Text style={styles.subText}>07.20 PM</Text>
                            </View>
                        </View>
                        <View style={styles.PerNotification}>
                            <Image source={profile2} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Luke Cheree </Text>
                                    <Text style={styles.textDesc}> Followed you</Text>
                                </View>
                                <Text style={styles.subText}>05.03 PM</Text>
                            </View>
                        </View>
                        <View style={styles.PerNotification}>
                            <Image source={profile3} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Charlie </Text>
                                    <Text style={styles.textDesc}> Commented on your content</Text>
                                </View>
                                <Text style={styles.subText}>11.12 AM</Text>
                            </View>
                        </View>
                        <View style={styles.PerNotification}>
                            <Image source={profile2} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Willie </Text>
                                    <Text style={styles.textDesc}> Commented on your content</Text>
                                </View>
                                <Text style={styles.subText}>11.00 AM</Text>
                            </View>
                        </View>
                        <View style={styles.PerNotification}>
                            <Image source={profile3} style={styles.profileNotification} />
                            <View style={styles.textContent}>
                                <View style={styles.textContentTitle}>
                                    <Text style={styles.name}>Rachel </Text>
                                    <Text style={styles.textDesc}> Liked your content</Text>
                                </View>
                                <Text style={styles.subText}>10.00 AM</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FB',
    },
    subContainer: {
        backgroundColor: '#F6F7FB',
        marginHorizontal: 37,
    },
    menuWrapper: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    titleHeader:{
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        paddingLeft: 15,
        marginTop: 15,
    },
    profileImage: {
        width: 45,
        height: 45,
        marginTop: 2,
        shadowColor: '#F2C5B2',
        shadowOffset: {
            width: 5,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 56.00,
    },
    NotificationDayContainer: {
        flexDirection: 'column',
    },
    dayTitle: {
        fontSize: 15,
        fontFamily: 'Lato_300Light',
        marginVertical: 22.64,
    },
    PerNotification: {
        flexDirection: 'row',
        marginBottom: 33,
        alignItems: 'center',
    },
    profileNotification: {
        width: 35,
        height: 35,
        marginRight: 16,
    },
    textContentTitle: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    name: {
        fontFamily: 'Lato_700Bold',
        fontSize: 15,
    },
    textDesc: {
        fontFamily: 'Lato_400Regular',
    },
    subText: {
        color: colors.darkGray,
        fontFamily: 'Lato_400Regular',
        fontSize: 12,
        marginTop: 2
    },
})
export default Notification;