import { useLinkProps } from "@react-navigation/native"
import { TouchableOpacity, View } from "react-native"
import FilterIcon from "../assets/svg/FilterIcon"
import LeftArrowIcon from "../assets/svg/LeftArrowIcon"
import SimpleText from "./SimpleText"

const Header = (props) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#09A541', paddingVertical: props.padding ? props.padding : 60, paddingHorizontal: 30, }}>
            <TouchableOpacity onPress={props.onBackPress}>
                <LeftArrowIcon />
            </TouchableOpacity>
            <SimpleText
                text={props.title}
                Style={{
                    fontWeight: '600',
                    fontSize: 18,
                    color: '#FFFFFF'
                }}
            />
            {props.FilterIcon ?
                <TouchableOpacity onPress={props.onFilterPress}>
                    < FilterIcon />
                </TouchableOpacity> :
                <View />}
        </View>
    )
}
export default Header