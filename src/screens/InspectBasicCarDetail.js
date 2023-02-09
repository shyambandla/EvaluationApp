// import { View, Image, Dimensions } from "react-native"
// import Button from "../component/Button"
// import Header from "../component/Header"
// import Tabs from "../component/Tabs"
// import { LoginPicture } from "../constants/Images"

// const InspectBasicCarDetail = ({ navigation }) => {
//     return (
//         <View style={{ flex: 1, backgroundColor: '#f0eff4' }}>
//             <Header
//                 title={"Basic Car Detail"}
//                 onBackPress={() => navigation.goBack()}
//             />
//             <View style={{ height: "80%", marginTop: -40, paddingHorizontal: 26, backgroundColor: 'white', borderRadius: 18, marginHorizontal: 18 }}>
//                 <View>
//                     <SimpleText
//                         text={"Chassis Number"}
//                         Style={{
//                             marginTop: 22,
//                             fontSize: 12, fontWeight: '500', color: '#374151'
//                         }}
//                     />
//                     <SimpleText
//                         text={"XDCFVGBHNJM"}
//                         Style={{
//                             marginTop: 10,
//                             fontSize: 12, fontWeight: '500', color: '#8A8A8A'
//                         }}
//                     />
//                     <View style={{
//                         marginTop: 12,
//                         height: 2, backgroundColor: '#DFDFE2'
//                     }} />
//                 </View>
//                 <View>
//                     <SimpleText
//                         text={"Engine Number"}
//                         Style={{
//                             marginTop: 22,
//                             fontSize: 12, fontWeight: '500', color: '#374151'
//                         }}
//                     />
//                     <SimpleText
//                         text={"XDCFVGBHNJM"}
//                         Style={{
//                             marginTop: 10,
//                             fontSize: 12, fontWeight: '500', color: '#8A8A8A'
//                         }}
//                     />
//                     <View style={{
//                         marginTop: 12,
//                         height: 2, backgroundColor: '#DFDFE2'
//                     }} />
//                 </View>
//                 <View style={{ marginTop: 42 }} />
//                 <Button

//                     backgroundColor="#FCD236"
//                     textColor={'black'}
//                     title="Inspect"
//                     borderRadius={12}
//                 // onPress={() => navigation.navigate('InspectionScreen')}

//                 />
//             </View>

//         </View>
//     )
// }
// export default InspectBasicCarDetail





import { View, Image, Dimensions } from "react-native"
import Button from "../component/Button"
import Header from "../component/Header"
import Tabs from "../component/Tabs"
import { LoginPicture } from "../constants/Images"
import { useState } from "react"
import InputDetail from '../component/InputDetail'
import {setChassisNumber,setEngineNumber} from '../redux/slices/BasicCarDetailsSlice';
import { useDispatch, useSelector } from "react-redux"

const InspectBasicCarDetail = ({ navigation }) => {

    const cardetails = useSelector((state)=>state.basicCarDetail.chassisNumber)
    const [chassisNumberI, setChassisNumberI] = useState('KA03AE7835')
    const [engineNumberI, setEngineNumberI] = useState('124252256633')

    const dispatch =useDispatch();

    return (
        <View style={{ flex: 1, backgroundColor: '#f0eff4' }}>
            <Header
                title={"Basic Car Detail"}
                onBackPress={() => navigation.goBack()}
            />
            <View style={{ height: "80%", marginTop: -40, paddingHorizontal: 26, backgroundColor: 'white', borderRadius: 18, marginHorizontal: 18 }}>
                <View>
                <View style={{
                        marginTop: 45,
                  
                    }} />
                     <InputDetail
                    textInputTitle={"Chassis Number"}
                    textInputValueChange={(value) => { setChassisNumberI(value) }}
                    textInputValue={chassisNumberI}
                />
                    <View style={{
                        marginTop: 22,
                  
                    }} />
                </View>
                <View>
                <InputDetail
                    textInputTitle={"Engine Number"}
                    textInputValueChange={(value) => { setEngineNumberI(value) }}
                    textInputValue={engineNumberI}
                />
                </View>
                <View style={{ marginTop: 42 }} />
                <Button
                     
                    backgroundColor="#FCD236"
                    textColor={'black'}
                    title="Inspect"
                    borderRadius={12}
               // onPress={() => navigation.navigate('InspectionScreen')}
               onPress={() =>{dispatch(setChassisNumber(chassisNumberI));
                dispatch(setEngineNumber(engineNumberI));
                navigation.goBack();
            console.log(cardetails,"car details") }}

                />
            </View>

        </View>
    )
}
export default InspectBasicCarDetail