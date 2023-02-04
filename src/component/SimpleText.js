import * as React from 'react'
import { Text } from 'react-native'
export default SimpleText = (props) => {
    return (
        <Text numberOfLines={props.numberOfLines} style={[props.Style]}>{props.text}</Text>
    )
}