import * as React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
export default Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: props.width,
                paddingVertical: 20,
                backgroundColor: props.backgroundColor,
                borderRadius: props.borderRadius ? props.borderRadius : 16,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: props.textColor ? props.textColor : 'white'
                }}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}