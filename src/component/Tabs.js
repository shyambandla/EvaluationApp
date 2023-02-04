import { TouchableOpacity } from "react-native"
import RightArrowIcon from "../assets/svg/RightArrowIcon"
import SimpleText from "./SimpleText"

const Tabs = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 33, paddingRight: 15, paddingVertical: 16, backgroundColor: '#F5B00F' }}>
            <SimpleText
                text={props.text}
                Style={{ fontSize: 14, fontWeight: '600', color: '#000000' }}
            />
            <RightArrowIcon />
        </TouchableOpacity>
    )
}
export default Tabs