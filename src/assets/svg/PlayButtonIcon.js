import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const PlayButtonIcon = (props) => (
    <Svg
        width={34}
        height={34}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={17} cy={17} r={17} fill="#fff" />
        <Path
            d="M21.192 15.268c1.334.77 1.334 2.694 0 3.464l-4.788 2.765c-1.334.77-3-.193-3-1.732v-5.53c0-1.54 1.666-2.502 3-1.732l4.788 2.765Z"
            fill="#000"
        />
    </Svg>
)

export default PlayButtonIcon
