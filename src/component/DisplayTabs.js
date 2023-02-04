import { View } from "react-native"
import DownArrowIcon from "../assets/svg/DownArrowIcon"
import SmallRightIcon from "../assets/svg/SmallRightIcon"
import SimpleText from "./SimpleText"

const DisplayTabs = (props) => {
    return (
        <View style={{ backgroundColor: 'white', borderRadius: 4, }}
        >
            <View style={{ paddingLeft: 33, paddingRight: 15, padding: 17, flexDirection: 'row', justifyContent: 'space-between' }}>
                <SimpleText
                    text={props.tabName}
                    Style={{ fontSize: 14, fontWeight: '500', color: 'black' }}
                />
                <SmallRightIcon />
                {/* <DownArrowIcon /> */}
            </View>

            <View style={{ position: 'absolute', bottom: 0, height: 3, width: props.progress ? props.progress : "100%", backgroundColor: props.color ? props.color : '#008000' }} />
        </View>
    )
}
export default DisplayTabs