import { View, Image, Dimensions, ScrollView } from "react-native"
import Tabs from "../component/Tabs"
import { LoginPicture } from "../constants/Images"
import { useSelector } from "react-redux"
import {selectUserType} from "../redux/slices/MainSlice"

const InspectionScreen = ({ navigation }) => {
    const userType =useSelector(selectUserType)
    return (
        <View style={{ flex: 1, backgroundColor: '#f0eff4' }}>
            <Image
                source={LoginPicture}
                resizeMode={'stretch'}
                style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height / 2.2, borderBottomRightRadius: 400, borderBottomLeftRadius: 400 }}
            />
             {
                    userType && userType === 'INSPECTION'?
                    <ScrollView>
                
                    <View style={{ paddingHorizontal: 16, paddingTop: 93, }}>
                        <Tabs
                            text={'Vehicle Inspection Requests'}
                            onPress={() => { navigation.navigate("InspectionRequestScreen") }}
                        />
                        <View style={{ marginTop: 15 }} />
                        <Tabs
                            text={'Vehicle Inspection Completed'}
    
                            onPress={() => { navigation.navigate("InspectionCompleteScreen") }}
                        />
                        <View style={{ marginTop: 15 }} />
                        <Tabs
                            text={'New Inspection'}
                            onPress={() => { navigation.navigate('CarBasicInputScreen') }}
                        />
    
                    </View>
                </ScrollView>:   <ScrollView>
                
                <View style={{ marginTop: 55 }} />
                        <Tabs
                            text={'Vehicle Inspection Completed'}
    
                            onPress={() => { navigation.navigate("InspectionCompleteScreen") }}
                        />
                   
            </ScrollView>
                 }
         
        </View>
    )
}
export default InspectionScreen