import { FlatList, Platform, TextInput, TouchableOpacity, View, Text, ScrollView } from "react-native"
import EmailIcon from "../assets/svg/EmailIcon"
import SimpleText from "./SimpleText"

const InputTextSuggestion = (props) => {
    return (
        <View style={{ borderWidth: 1, borderColor: '#dfdfe2', padding: Platform.OS == 'android' ? 2 : 17, borderRadius: 8, backgroundColor: '#FFFFFF', flexDirection: 'row' }} >

            <TextInput
                placeholder={props.placeHolder}
                placeholderTextColor={'#8A8A8A'}
                value={props.value}
                onChangeText={(text) => props.onValueChange(text)}
                style={{
                    color: '#393939',
                    width: "80%"

                }}
                secureTextEntry={props.isSecure}
                editable={props.editable}
            />
            {props.Icon ? <View style={{ width: "20%", paddingRight: 10, justifyContent: 'center', alignItems: 'flex-end', }}>
                <TouchableOpacity onPress={props.IconPress}>
                    {props.Icon}
                </TouchableOpacity>
            </View> : null}

            {props.showSuggestion &&
                <FlatList
                    style={{

                        padding: 10,
                        width: "100%",
                        backgroundColor: '#faf7ff',
                        position: 'absolute',
                        top: 50,
                        left: 0,
                        borderRadius: 10
                    }}
                    data={props.suggestionData}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => { props.onSuggestionPress(item) }}>
                                <View style={{ paddingVertical: 10 }}>
                                    <Text style={{ color: 'black' }}>{item}</Text>

                                </View>
                                <View style={{ width: "100%", height: 1, backgroundColor: '#dfdfe2' }} />

                            </TouchableOpacity>
                        )
                    }}
                />

            }

        </View >
    )
}

export default InputTextSuggestion


// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
// import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
// import { Button, Dimensions, Text, View, Platform, TouchableOpacity } from 'react-native'



// const InputTextSuggestion = (props) => {
//     const [selectedItem, setSelectedItem] = useState(null)

//     useEffect(() => {
//         console.log(">>>>>>>>>>selectedItem", selectedItem?.title);
//     }, [selectedItem])
//     return (
//         <View style={[{ flex: 1, }, Platform.select({ ios: { zIndex: props.zIndex } })]}>

//             <AutocompleteDropdown
//                 direction={Platform.select({ ios: 'down' })}
//                 clearOnFocus={false}
//                 closeOnBlur={true}
//                 closeOnSubmit={false}
//                 showChevron={false}
//                 showClear={false}
//                 initialValue={props.value}
//                 onChangeText={(text) => props.onValueChange(text)}
//                 onSelectItem={setSelectedItem}
//                 //initialValue={{ id: '2' }} // or just '2'

//                 dataSet={[
//                     { id: '1', title: 'Alpha' },
//                     { id: '2', title: 'Beta' },
//                     { id: '3', title: 'Gamma' },
//                 ]}
//                 // inputContainerStyle={{
//                 //     backgroundColor: '#383b42',
//                 //     borderRadius: 1,
//                 // }}
//                 textInputProps={{
//                     placeholder: props.placeHolder,
//                     autoCorrect: false,
//                     autoCapitalize: 'none',
//                     placeholderTextColor: 'black'


//                 }}
//                 suggestionsListContainerStyle={{

//                     backgroundColor: 'white',
//                 }}
//                 inputContainerStyle={{
//                     backgroundColor: 'white',
//                     borderRadius: 10,
//                     borderWidth: 1,
//                     borderColor: '#DFDFE2',
//                     color: 'black',
//                     width: "100%"

//                 }}
//                 containerStyle={{ flexGrow: 1, flexShrink: 1 }}
//                 suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}

//             />
//             {props.Icon ? <View >
//                 <TouchableOpacity style={{ position: 'absolute', right: 0, bottom: 12, width: "20%", paddingRight: 10, justifyContent: 'center', alignItems: 'flex-end', }} onPress={props.IconPress}>
//                     {props.Icon}
//                 </TouchableOpacity>
//             </View> : null}
//         </View>

//     )
// }
// export default InputTextSuggestion