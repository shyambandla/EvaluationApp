import { View } from "react-native"
import SimpleText from "./SimpleText"

const CarDetail = (props) => {
    return (
        <View style={{ borderRadius: 4, paddingLeft: 36, paddingRight: 34, paddingVertical: 20, backgroundColor: '#ffffff' }}
        >

            <SimpleText
                text={props.carName}
                Style={{
                    fontSize: 16, fontWeight: '700', color: "#000000"
                }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: "50%" }}>
                    <SimpleText
                        text={"Inspection time"}
                        Style={{
                            marginTop: 20,
                            fontSize: 16, fontWeight: '700', color: "#000000"
                        }}
                    />
                    <SimpleText
                        text={props.time}
                        Style={{
                            marginTop: 5,
                            fontSize: 10, fontWeight: '500', color: "#808080"
                        }}
                    />
                </View>
                <View style={{ width: "50%", paddingLeft: 20, }}>
                    <SimpleText
                        text={"Inspection date"}
                        Style={{
                            marginTop: 20,
                            fontSize: 16, fontWeight: '700', color: "#000000"
                        }}
                    />
                    <SimpleText
                        text={props.date}
                        Style={{
                            marginTop: 5,
                            fontSize: 10, fontWeight: '500', color: "#808080"
                        }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                <View style={{ width: "50%" }}>
                    <SimpleText
                        text={"Person name"}
                        Style={{
                            marginTop: 20,
                            fontSize: 16, fontWeight: '700', color: "#000000"
                        }}
                    />
                    <SimpleText
                        text={props.userName}
                        Style={{
                            marginTop: 5,
                            fontSize: 10, fontWeight: '500', color: "#808080"
                        }}
                    />
                </View>
                <View style={{ width: "50%", paddingLeft: 20, }}>
                    <SimpleText
                        text={'Location'}
                        Style={{

                            marginTop: 20,
                            fontSize: 16, fontWeight: '700', color: "#000000"
                        }}
                    />
                    <SimpleText
                        text={props.location}
                        Style={{
                            marginTop: 5,
                            fontSize: 10, fontWeight: '500', color: "#808080"
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
export default CarDetail