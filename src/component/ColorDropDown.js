import { TextInput, View, StyleSheet, Text, TouchableOpacity, Platform } from "react-native"
import SimpleText from "./SimpleText"
//import { Dropdown } from 'react-native-material-dropdown';
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import DownArrow from "../assets/svg/DownArrow";
import { useDispatch, useSelector } from "react-redux"
import {setRegistrationNo,setMake,setModel,setMfgYear,setMfgMonth,setVersion,setColor,setNumberOfOwner,setRegistrationDate,setOdometerReading} from '../redux/slices/BasicCarDetailsSlice';

const ColorDropDown = (props) => {

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [showButton, setShowButton] = useState(Platform.OS == 'ios' ? true : false);
    const [showIosPicker, setShowIosPicker] = useState(false);


useEffect(() => {
        console.log("props.data", props.data);
        if (props.data != undefined && props.data.length > 0) {
            setSelectedLanguage(props.data[0]._id)
            props.setData(props.data[0]._id)
        }
    }, [props.data])

    const dispatch = useDispatch()
    return (
        <View style={{ width: '40%' }}>
            <SimpleText
                text={props.title}
                Style={{
                    color: '#374151',
                    fontSize: 14,
                    fontWeight: '500', marginBottom: 10,
                }}
            />
            {showButton ? <>
                <TouchableOpacity
                    onPress={() => setShowIosPicker(true)}
                    style={{
                        borderBottomColor: '#DFDFE2', borderBottomWidth: 2,
                        justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'
                    }} >
                    <SimpleText
                        text={selectedLanguage}
                        Style={{
                            color: '#8A8A8A', marginBottom: 5,
                        }}
                    />
                    <DownArrow />

                </TouchableOpacity>
                {showIosPicker && <Picker

                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => {
                        console.log(">itemValueitemValue", itemValue);
                        setSelectedLanguage(itemValue)
                        // props.setData(itemValue)
                        setShowIosPicker(false)
                    }}
                    style={{
                        marginTop: -40
                    }}
                    mode={'dropdown'}
                >
                    {
                        props.data.map((item) => {
                            return (
                                <Picker.Item label={item.name} value={item._id} />

                            )
                        })
                    }


                </Picker>}
            </> :
                <Picker
              
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedLanguage(itemValue)
                        // props.setData(itemValue)
                        console.log(itemValue,"color data")
                        dispatch(setColor(itemValue))
                    }}
                    style={{
                        //  width: "50%", backgroundColor: 'white'
                    }}
                    mode={'dropdown'}
                >
                    
                    {
                    props.data.map((item) => {
                            
                            return (
                                <Picker.Item label={item.name} value={item._id} />

                            )
                        })
                    }

                </Picker>}
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});
export default ColorDropDown