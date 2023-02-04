import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const FilterIcon = (props) => (
    <Svg
        width={40}
        height={39}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={39.209} height={39} rx={10} fill="#fff" />
        <Path
            d="M22.25 17.75v-4.5h1.512v1.512h2.988v1.476h-2.988v1.512H22.25Zm4.5 2.988h-7.488v-1.476h7.488v1.476ZM16.238 17.75h1.512v4.5h-1.512v-1.512H13.25v-1.476h2.988V17.75Zm4.5 9h-1.476v-4.5h1.476v1.512h6.012v1.476h-6.012v1.512ZM13.25 14.762h7.488v1.476H13.25v-1.476Zm0 9h4.5v1.476h-4.5v-1.476Z"
            fill="#9A9EA7"
        />
    </Svg>
)

export default FilterIcon
