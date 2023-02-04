import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PinIcon = (props) => (
    <Svg
        width={12}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.625 0A5.632 5.632 0 0 0 0 5.625c0 4.038 5.24 9.096 5.463 9.31a.232.232 0 0 0 .324 0c.222-.214 5.463-5.272 5.463-9.31A5.632 5.632 0 0 0 5.625 0Zm0 8.203a2.578 2.578 0 1 1 0-5.156 2.578 2.578 0 0 1 0 5.156Z"
            fill="#09A541"
        />
    </Svg>
)

export default PinIcon
