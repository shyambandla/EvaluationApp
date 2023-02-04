import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DownArrow = (props) => (
    <Svg
        width={9}
        height={5}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="m0 0 4.5 5L9 0H0Z" fill="#8A8A8A" />
    </Svg>
)

export default DownArrow
