import { TextInput, View } from "react-native"
import EmailIcon from "../assets/svg/EmailIcon"

const InputText = (props) => {
    return (
        <View style={{ borderRadius: 8, backgroundColor: '#F3F4F6', flexDirection: 'row' }} >
            <View style={{ padding: 16, paddingRight: 24 }}>
                {props.Icon}
            </View>
            <TextInput
                placeholder={props.placeHolder}
                placeholderTextColor={'#8A8A8A'}
                value={props.value}
                onChangeText={(text) => props.onValueChange(text)}
                style={{
                    color: '#8A8A8A',
                    width: "80%"

                }}
                secureTextEntry={props.isSecure}
            />
        </View>
    )
}

export default InputText