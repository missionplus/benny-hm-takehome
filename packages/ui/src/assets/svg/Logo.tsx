/* @jsxImportSource nativewind */
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { SvgProps } from ".";

const LogoSvg = ({ width = 148, height = 24 }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 149 25" fill="none">
      <Path
        d="M133.002 0.5L137.385 8.08203H137.572L142.002 0.5H148.494L141.252 12.5L148.729 24.5H142.072L137.572 16.8359H137.385L132.885 24.5H126.275L133.717 12.5L126.463 0.5H133.002Z"
        fill="url(#paint0_linear_4_763)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100.632 24.5H106.866L108.039 20.7574L108.016 20.7501L108.427 19.4609L109.346 16.5844L109.835 15.0547H109.825L112.491 6.54687H112.678L115.35 15.0547H113.043L111.636 19.4609H116.733L118.315 24.5H124.55L116.452 0.5H108.729L100.632 24.5Z"
        fill="url(#paint1_linear_4_763)"
      />
      <Path
        d="M71.2168 0.5H78.4004L84.4941 15.3594H84.7754L90.8691 0.5H98.0527V24.5H92.4043V9.75781H92.2051L86.4395 24.3477H82.8301L77.0645 9.67578H76.8652V24.5H71.2168V0.5Z"
        fill="url(#paint2_linear_4_763)"
      />
      <Path
        d="M44.1309 0.5H50.6113L55.6855 10.543H55.8965L60.9707 0.5H67.4512L58.6738 16.4844V24.5H52.9082V16.4844L44.1309 0.5Z"
        fill="white"
      />
      <Path
        d="M25.0222 24.5V0.5H41.7566V5.21094H30.823V10.1328H40.9012V14.8555H30.823V19.7891H41.7566V24.5H25.0222Z"
        fill="white"
      />
      <Path
        d="M0.271484 24.5V0.5H6.07227V10.1328H15.5293V0.5H21.3184V24.5H15.5293V14.8555H6.07227V24.5H0.271484Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_4_763"
          x1="69.4014"
          y1="12.4"
          x2="134.927"
          y2="43.5147"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#802EFF" />
          <Stop offset="1" stopColor="#D500FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_4_763"
          x1="69.4041"
          y1="12.4"
          x2="134.929"
          y2="43.5147"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#802EFF" />
          <Stop offset="1" stopColor="#D500FF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_4_763"
          x1="69.4004"
          y1="12.4"
          x2="134.926"
          y2="43.5147"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#802EFF" />
          <Stop offset="1" stopColor="#D500FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export const Logo = ({
  className = "",
  width = 100,
  height = 40,
}: SvgProps) => {
  return <LogoSvg className={className} width={width} height={height} />;
};

export default Logo;
