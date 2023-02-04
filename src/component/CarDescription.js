import { Image, TouchableOpacity, View } from "react-native"
import SimpleText from "./SimpleText"

const CarDescription = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressDetail}>
            <View style={{ borderRadius: 8, backgroundColor: '#FFFFFF', flexDirection: 'row', paddingHorizontal: 23, paddingBottom: 21, paddingTop: 20 }}>
                <Image
                    source={{ uri: props.image }}
                    resizeMode={'contain'}
                    style={{
                        width: 115, height: 115, borderRadius: 8
                    }}
                />
                <View style={{ marginLeft: 24 }}>
                    <SimpleText
                        text={props.name}
                        Style={{
                            fontWeight: '700',
                            fontSize: 12, color: '#374151'
                        }}

                    />
                    <SimpleText
                        text={props.model}
                        Style={{
                            fontWeight: '500',
                            fontSize: 12, color: '#878d97', paddingTop: 4
                        }}

                    />
                    <SimpleText
                        text={'Inspection Time'}
                        Style={{
                            fontWeight: '600',
                            fontSize: 9, color: '#374151', marginTop: 18
                        }}
                    />
                    <SimpleText
                        text={props.time}
                        Style={{
                            fontWeight: '600',
                            fontSize: 9, color: '#374151', paddingTop: 6
                        }}
                    />
                    <SimpleText
                        text={props.status}
                        Style={{
                            fontWeight: '600',
                            fontSize: 12, color: '#374151', paddingTop: 13
                        }}
                    />


                </View>
            </View>
        </TouchableOpacity>
    )

}
export default CarDescription