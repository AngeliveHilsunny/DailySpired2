import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    ImageBackground,
    FlatList,
    SectionList,
} from 'react-native';
import CourseData from '../../assets/data/CourseData';
// soalno1
// export default function soal2() {
//     return (
//         <View style={styles.container}>
//             <Text>Anda sedang mengerjakan soal nomor 2</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })

// const firstname = 'Angelive';

// export function Soal2() {
//     let middlename = 'Hilsunny';
//     let lastname = 'Imut';
    
//     const trimFullname = () => {
//         let fullname = firstname + " " + middlename + " " + lastname;
//         return fullname;
//     }

//     return (
//         <View style={styles.container}>
//             <Text>hai nama saya adalah {trimFullname()}</Text>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })


//Array
// export function Soal2() {
    
//     return (
//         <View>
//             {CourseData.map((v) => (
//                 <Text>{v.code} {v.title}</Text>
//             ))}
//         </View>
//     )
// }

// FlatList
export function Soal2() {
    const CourseItem = ({item}) =>{
        return (
            <View>
                <Text>{item.code} {item.title}</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data = {CourseData}
                renderItem = { ({item}) => <CourseItem item={item}/>}
                horizontal = {true}
            />
        </View>
    )
}

// export function Soal2() {
//     const DATA = [
//         {
//             title: 'Academic Documentation',
//             data: CourseData,
//         },
//         {
//             title: 'Academic Documentation',
//             data: CourseData,
//         },
//     ];

//     const CourseData = ({ item }) =>{
//         return (
//             <View>
//                 <Text>{item.code} {item.title}</Text>
//             </View>
//         );
//     };

//     return (
//         <View>
//             <SectionList
//                 sections={DATA}
//                 renderItem={({ item }) => <CourseItem item={item}/>}
//                 renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
//             />
//         </View>
//     );
// }
export function Soal2() {
    <NavigationContainer> 
        <StatusBar backgroundColor={colors.white} barStyle='dark-content'/>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='newTask' component={newTask}/>
            <Stack.Screen name='Home'component={home}/>
        </Stack.Navigator>
        <Stack.Screen 
            name='new'
            component={newTaskDetail}/>
    </NavigationContainer>
}
            
export default Soal2;