import { View, Image, Dimensions } from "react-native"
import Button from "../component/Button"
import Header from "../component/Header"
import Tabs from "../component/Tabs"
import { LoginPicture } from "../constants/Images"

const InspectBasicCarDetail = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#f0eff4' }}>
            <Header
                title={"Basic Car Detail"}
                onBackPress={() => navigation.goBack()}
            />
            <View style={{ height: "80%", marginTop: -40, paddingHorizontal: 26, backgroundColor: 'white', borderRadius: 18, marginHorizontal: 18 }}>
                <View>
                    <SimpleText
                        text={"Chassis Number"}
                        Style={{
                            marginTop: 22,
                            fontSize: 12, fontWeight: '500', color: '#374151'
                        }}
                    />
                    <SimpleText
                        text={"XDCFVGBHNJM"}
                        Style={{
                            marginTop: 10,
                            fontSize: 12, fontWeight: '500', color: '#8A8A8A'
                        }}
                    />
                    <View style={{
                        marginTop: 12,
                        height: 2, backgroundColor: '#DFDFE2'
                    }} />
                </View>
                <View>
                    <SimpleText
                        text={"Engine Number"}
                        Style={{
                            marginTop: 22,
                            fontSize: 12, fontWeight: '500', color: '#374151'
                        }}
                    />
                    <SimpleText
                        text={"XDCFVGBHNJM"}
                        Style={{
                            marginTop: 10,
                            fontSize: 12, fontWeight: '500', color: '#8A8A8A'
                        }}
                    />
                    <View style={{
                        marginTop: 12,
                        height: 2, backgroundColor: '#DFDFE2'
                    }} />
                </View>
                <View style={{ marginTop: 42 }} />
                <Button

                    backgroundColor="#FCD236"
                    textColor={'black'}
                    title="Inspect"
                    borderRadius={12}
                // onPress={() => navigation.navigate('InspectionScreen')}

                />
            </View>

        </View>
    )
}
export default InspectBasicCarDetail