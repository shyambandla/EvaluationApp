import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SmallRightIcon = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.148 6.172 10.977 10l-3.829 3.828L8.32 15l5-5-5-5-1.172 1.172Z"
            fill="#000"
        />
    </Svg>
)

export default SmallRightIcon
