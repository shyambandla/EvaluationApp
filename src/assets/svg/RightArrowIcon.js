// import * as React from "react"
// import Svg, { Path } from "react-native-svg"

// const RightArrowIcon = (props) => (
//     <Svg
//         width={20}
//         height={20}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         {...props}
//     >
//         <Path
//             d="M7.148 6.172 10.977 10l-3.829 3.828L8.32 15l5-5-5-5-1.172 1.172Z"
//             fill="#000"
//         />
//     </Svg>
// )

// export default RightArrowIcon
import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const RightArrowIcon = (props) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            x={0.5}
            y={0.5}
            width={29}
            height={29}
            rx={5.5}
            fill="#fff"
            stroke="#E4E6E8"
        />
        <Path
            d="M14.6 10.992 18.608 15 14.6 19.008l-.703-.703 2.789-2.813h-6.094v-.984h6.094l-2.79-2.813.704-.703Z"
            fill="#9A9EA7"
        />
    </Svg>
)

export default RightArrowIcon
