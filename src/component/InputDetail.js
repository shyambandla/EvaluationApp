import { TextInput, View } from "react-native"
import SimpleText from "./SimpleText"

const InputDetail = (props) => {
    return (
        <View>
            <SimpleText
                text={props.textInputTitle}
                Style={{ fontSize: 14, fontWeight: '500', color: '#374151' }}
            />
            <TextInput
                value={props.textInputValue}
                onChangeText={(value) => { props.textInputValueChange(value) }}
                style={{
                    paddingVertical: 7,
                    width: "100%", borderBottomWidth: 1, borderColor: '#DFDFE2'
                }}
            />
        </View>
    )
}
export default InputDetail