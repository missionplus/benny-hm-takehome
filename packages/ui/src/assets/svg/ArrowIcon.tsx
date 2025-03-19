import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "./index";

function ArrowIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.998 21.015c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41l-8.31-8.31a1.25 1.25 0 00-1.77 0 1.25 1.25 0 000 1.77l7.24 7.25-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ArrowIcon;
