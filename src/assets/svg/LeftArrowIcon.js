// import * as React from "react"
// import Svg, { Path } from "react-native-svg"

// const LeftArrowIcon = (props) => (
//     <Svg
//         width={14}
//         height={14}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         {...props}
//     >
//         <Path
//             d="M14 6.125H3.351l4.891-4.891L7 0 0 7l7 7 1.234-1.234L3.35 7.875H14v-1.75Z"
//             fill="#FFFBFB"
//         />
//     </Svg>
// )

// export default LeftArrowIcon


import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const LeftArrowIcon = (props) => (
    <Svg
        width={38}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={38} height={38} rx={10} fill="#F5F6F7" />
        <Path
            d="M21.566 15.555 18.121 19l3.445 3.445-1.054 1.055-4.5-4.5 4.5-4.5 1.054 1.055Z"
            fill="#9A9EA7"
        />
    </Svg>
)

export default LeftArrowIcon
