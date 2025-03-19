import {
  SvgProps as RNSvgProps,
} from "react-native-svg";

export interface SvgProps extends RNSvgProps {
  className?: string;
  width?: number;
  height?: number;
}

export { default as AmazonSvg } from './Amazon';
export { default as FaveSvg } from './Fave';
export { default as HnMSvg } from './HnM';
export { default as LazadaSvg } from './Lazada';
export { default as LogoSvg } from './Logo';
export { default as NutcSvg } from './Nutc';
export { default as ShoppeSvg } from './Shoppe';
export { default as UniqloSvg } from './Uniqlo';
export { default as PassportSvg } from './Passport';
export { default as FlightSvg } from './Flight';
export { default as GiftSvg } from './Gift';
export { default as ArrowIcon } from './ArrowIcon';
