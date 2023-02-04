import { TouchableOpacity, View, Image, Dimensions } from "react-native"
import DeleteIcon from "../assets/svg/DeleteIcon"
import PlayButtonIcon from "../assets/svg/PlayButtonIcon"
import RightArrowIcon from "../assets/svg/RightArrowIcon"
import { GalleryImage } from "../constants/Images"
import SimpleText from "./SimpleText"
import ImageButton from "./ImageButton"
import Video from "react-native-video"
import VideoPlayer from "react-native-video-player"
import RNFS from 'react-native-fs';
const VehicaleVideoComponent = (props) => {
    return (
        <View style={[{ alignItems: 'center', width: "50%", }, props.index > 1 && { marginTop: 45 }]}>
            <SimpleText
                text={props.text}
                Style={{ fontSize: 13, fontWeight: '600', color: 'black' }}
            />
            <View>
                {props.video ? <Video
                    source={{ uri: !props.video.includes('https:') ? `file://${RNFS.DocumentDirectoryPath}/${"attachment"}.mp4` : props.video }}
                    style={{ marginTop: 10, width: Dimensions.get('screen').width / 2.8, height: 120, borderRadius: 8 }}
                /> :
                    <TouchableOpacity onPress={props.VideoPress}>
                        <Image
                            source={GalleryImage}
                            width={Dimensions.get('screen').width / 2}
                        />
                    </TouchableOpacity>
                }
                {props.image ?
                    <TouchableOpacity
                        onPress={props.DeletePicture}
                        style={{ right: 10, top: 20, alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 18, height: 18, borderRadius: 100, backgroundColor: '#FCD236' }}>
                        <DeleteIcon />
                    </TouchableOpacity> : null}
            </View>
            {props.isPlay ? <TouchableOpacity
                onPress={props.OnPlayPress}
                style={{ position: 'absolute', bottom: 50, }}>
                <PlayButtonIcon />
            </TouchableOpacity> : null}



        </View>
    )
}
export default VehicaleVideoComponent