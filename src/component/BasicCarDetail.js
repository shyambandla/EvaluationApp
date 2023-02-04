import { View } from "react-native"
import DownArrowIcon from "../assets/svg/DownArrowIcon"
import SmallRightIcon from "../assets/svg/SmallRightIcon"
import SimpleText from "./SimpleText"

const BasicCarDetail = (props) => {
    return (
        <View style={{ backgroundColor: 'white', borderRadius: 4, }}
        >
            <View style={{ paddingRight: 20, paddingLeft: 33, paddingTop: 15, paddingBottom: 31, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <SimpleText
                        text={"Basic Car Detail"}
                        Style={{ fontSize: 14, fontWeight: '500', color: 'black' }}
                    />
                    {/* <SmallRightIcon /> */}
                    <DownArrowIcon />
                </View>
                <>
                    <View>
                        <SimpleText
                            text={"Chassis Number"}
                            Style={{
                                marginTop: 22,
                                fontSize: 12, fontWeight: '500', color: '#374151'
                            }}
                        />
                        <SimpleText
                            text={props.chassisNumber}
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
                                marginTop: 31,
                                fontSize: 12, fontWeight: '500', color: '#374151'
                            }}
                        />
                        <SimpleText
                            text={props.engineNumber}
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
                </>
            </View>
            <View style={{ position: 'absolute', bottom: 0, height: 3, width: "100%", backgroundColor: '#008000' }} />
        </View>
    )
}
export default BasicCarDetail