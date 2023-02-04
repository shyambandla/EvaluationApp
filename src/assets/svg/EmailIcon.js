import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EmailIcon = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.41 2-5.88 5.88a1.002 1.002 0 0 1-1.42 0L5.41 6h13.18ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41V17Z"
            fill="#8A8A8A"
        />
    </Svg>
)

export default EmailIcon
