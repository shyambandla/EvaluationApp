import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DownArrowIcon = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M13.828 7.148 10 10.977 6.172 7.148 5 8.32l5 5 5-5-1.172-1.172Z"
            fill="#000"
        />
    </Svg>
)

export default DownArrowIcon
