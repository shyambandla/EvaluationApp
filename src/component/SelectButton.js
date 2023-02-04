import * as React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import SimpleText from './SimpleText'
export default SelectButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: props.selected ? "#555bda" : '#dfdfe2',
            borderWidth: 2,
            paddingHorizontal: 25, paddingVertical: 10,
            backgroundColor: props.selected ? '#cae6fe' : 'white'
        }}>
            <SimpleText
                text={props.text}
                Style={{ fontSize: 12, fontWeight: '400', color: props.selected ? '#555BDA' : '#374151' }}
            />
        </TouchableOpacity>
    )
}