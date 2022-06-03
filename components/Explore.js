import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    ImageBackground,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// const TextTitle = (param) => {
//     return(
//         <Text>{param.data}</Text>
//     )
// }
// // const Explore = ({}) => {
// //     return (
// //         <View>
// //             <Text>Latihan</Text>
// //             <TextTitle data="PPB"/>
// //             {TextTitle({data:"Per. 7"})}
// //         </View>
// //     );
// // };

// const hari = "Sabtu";

// export function Explore () {
//     var kelas = "regular";

//     const TrimSchedule = (schedule) => {
//         let waktu = "07.30-10.00";
//         return (
//             <View>
//                 <Text>Hari: {hari}</Text>
//                 <Text>Pukul: {waktu}</Text>
//                 <Text>Kelas: {kelas}</Text>
//             </View>
//         );
//     }
    
//     return (
//         <View>
//             <Text>Latihan</Text>
//             <TextTitle data="PPB"/>
//             {TextTitle({data:"Per. 7"})}
//         <TrimSchedule/>
//         </View>
//     );
// };

const StudentData1 = (param) => {
    return(
        <View>
            <Text>Student ID: {param.id}</Text>
            <Text>Student name: {param.name}</Text>
        </View>
    )
}

const StudentData2 = (id, name) => {
    return(
        <View>
            <Text>Student ID: {id}</Text>
            <Text>Student name: {name}</Text>
        </View>
    )
}
// const Iddata = [
//     {
//     id : '202310014',
//     name: 'Angelive Hilsunny'
//     }
// ];

let data = {id: '202310014', name: 'Angel'}
export function Explore () {
    return (
        <View style={styles.container}>
            <StudentData1 id={1454} name={'Angel'}/>
            {StudentData2(321, 'Apip')}
        </View>
    )
}

const styles = StyleSheet.create({
})
export default Explore;