import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DeleteIcon = (props) => (
    <Svg
        width={8}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.64 8.15c0 .083.032.163.09.222a.307.307 0 0 0 .436 0 .315.315 0 0 0 .09-.222V3.726a.315.315 0 0 0-.09-.222.307.307 0 0 0-.436 0 .315.315 0 0 0-.09.222V8.15Zm-1.82 0c0 .083.032.163.09.222a.307.307 0 0 0 .437 0 .315.315 0 0 0 .09-.222V3.726a.315.315 0 0 0-.09-.222.307.307 0 0 0-.437 0 .315.315 0 0 0-.09.222V8.15ZM2 8.15c0 .083.033.163.09.222a.307.307 0 0 0 .437 0 .315.315 0 0 0 .09-.222V3.726a.315.315 0 0 0-.09-.222.307.307 0 0 0-.436 0 .315.315 0 0 0-.09.222V8.15ZM5.943.63a.458.458 0 0 1 .43.288.474.474 0 0 1-.252.615.458.458 0 0 1-.178.034H2.314a.458.458 0 0 1-.43-.288.474.474 0 0 1 .252-.615.458.458 0 0 1 .178-.034h3.629Zm1.22 8.744a.275.275 0 0 1-.086.182.268.268 0 0 1-.184.074H1.364a.268.268 0 0 1-.184-.074.275.275 0 0 1-.085-.182L.658 2.538A.278.278 0 0 1 .82 2.27a.268.268 0 0 1 .107-.023H7.33a.268.268 0 0 1 .254.182.278.278 0 0 1 .015.11l-.437 6.834Z"
            fill="#393939"
        />
    </Svg>
)

export default DeleteIcon
