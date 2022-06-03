import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet, ProgressBarAndroid} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* <View style={styles.containerIcon}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={(e) => navigation.navigate('Home')}
                    >
                        <Ionicons name='arrow-back' size={25} color='#624FD7' style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='options' size={25} color='#624FD7' style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileBox}>
                    <View style={styles.imgPosition}>
                        <Image source={(require('../assets/images/profile.png'))} style={styles.img} />
                    </View>
                    <Text style={styles.name}>Angelive Hilsunny</Text>
                    <Text style={styles.bio}>@angelive91</Text>
                    <Text style={styles.title}>Student</Text>
                    <View style={styles.containerBar}>
                        <View style={styles.bar}>
                            <View style={styles.progressBar}></View>
                        </View>
                        <View style={styles.detail}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnTitle}>View Detail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.barText}>75% completed</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 30}}>
                    <Text style={{color: '#624FD7', fontWeight: '700', fontSize: 14, lineHeight: 16}}>Basic Information</Text>
                </View>
                <View style={{width: 312, height: 228, backgroundColor: '#FAFAFC',shadowColor:'#AC9FD0', borderRadius: 25, marginHorizontal: 40}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#E3E1F2', marginTop: 24, marginHorizontal: 21}}>
                        <Text style={{fontWeight: 'bold', fontSize: 12, lineHeight: 14, color: '#958DC8', marginBottom: 15}}>Department</Text>
                        <Text style={{color: '#B7B4C7', fontWeight: '400', fontSize: 12, lineHeight: 14}}>Information Technology</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#E3E1F2', marginTop: 24, marginHorizontal: 21}}>
                        <Text style={{fontWeight: 'bold', fontSize: 12, lineHeight: 14, color: '#958DC8', marginBottom: 15}}>Agency</Text>
                        <Text style={{color: '#B7B4C7', fontWeight: '400', fontSize: 12, lineHeight: 14}}>IBI Kesatuan</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#E3E1F2', marginTop: 24, marginHorizontal: 21}}>
                        <Text style={{fontWeight: 'bold', fontSize: 12, lineHeight: 14, color: '#958DC8', marginBottom: 15}}>Semester</Text>
                        <Text style={{color: '#B7B4C7', fontWeight: '400', fontSize: 12, lineHeight: 14}}>Semester 6</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, marginHorizontal: 21}}>
                        <Text style={{fontWeight: 'bold', fontSize: 12, lineHeight: 14, color: '#958DC8', marginBottom: 15}}>Email</Text>
                        <Text style={{color: '#B7B4C7', fontWeight: '400', fontSize: 12, lineHeight: 14}}>angelive139gmail.com</Text>
                    </View>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F2F9'
    },
    containerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20
    },
    icon: {
        marginTop: 45.5,
        marginHorizontal: 18,
    },
    profileBox: {
        flexDirection: 'column',
        marginHorizontal: 40,
        marginTop: 75,
        height: 159,
        width: 312,
        backgroundColor: '#FAFAFC',
        padding: 20,
        shadowColor: "rgba(172, 159, 208, 0.25)",
        shadowOffset: {
            width: 1,
            height: 0.5,
        },
        shadowOpacity: 0.90,
        shadowRadius: 2.22,
        elevation: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgPosition: {
        position: 'absolute',
        top: -30,
    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    name: {
        fontWeight: 'bold',
        color: '#624FD7',
        fontSize: 16,
        lineHeight: 18.75,
        marginTop: 12
    },
    bio: {
        color: '#B7B4C7',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13,
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        lineHeight: 14,
        fontSize: 12,
        color: '#624FD7',
        marginLeft: -210,
        marginTop: 10
    },
    containerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bar: {
        width: 173.26,
        height: 8.61,
        backgroundColor: '#E4E7F2',
        borderRadius: 5.5
    },
    progressBar: {
        width: 113.21,
        height: 8.61,
        backgroundColor: '#624FD7',
        borderRadius: 5.5
    },
    detail: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16
    },
    btn: {
        borderColor: '#624FD7',
        borderWidth: 1,
        padding: 7,
        borderRadius: 9
    },
    btnTitle: {
        fontSize: 10,
        color: '#624FD7',
        fontWeight: 'bold',
        lineHeight: 12
    },
    barText: {
        color: '#B7B4C7',
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 13,
        marginLeft: -175
    },
})

export default ProfileScreen;