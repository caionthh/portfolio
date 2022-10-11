import Svg, {
  Defs, LinearGradient, Stop, Path,
} from "react-native-svg";
import Animated, { interpolate, multiply } from "react-native-reanimated";

interface ProgressProps {
  width: number;
  progress: number;
  stroke?: number;
  fillColor?: string | string[];
  backgroundColor?: string | string[];

}

export const ProgressArch = (props: ProgressProps) => {

  const { PI, cos, sin } = Math;
  const AnimatedPath = Animated.createAnimatedComponent(Path);

  const size = props.width - 32;
  const strokeWidth = props.stroke || 5;

  //Arch params
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;

  const angle = PI + PI * 0.4;
  const startAngle = PI + PI * 0.2;
  const endAngle = 2 * PI - PI * 0.2;

  //Canvas
  const startX = cx - r * cos(startAngle);
  const startY = -r * sin(startAngle) + cy;
  const endX = cx - r * cos(endAngle);
  const endY = -r * sin(endAngle) + cy;

  //SVG build
  const d = `M ${startX} ${startY} A ${r} ${r} 0 1 0 ${endX} ${endY}`;

  const circunference = r * angle;
  const alpha = interpolate(props.progress, [0, 1], [0, angle]);

  const strokeDashoffset = multiply(alpha, r);

  const getFillColor = (): string => {
    if (Array.isArray(props.fillColor))
      return "url(#fillGrad)";

    return props.fillColor ? props.fillColor : "#fff";
  }

  const getBackgroundColor = (): string => {
    if (Array.isArray(props.backgroundColor))
      return "url(#bgGrad)";

    return props.backgroundColor ? props.backgroundColor : "#0ff";
  }

  return (
    <Svg width={size} height={size}>
      <Defs>
        {
          Array.isArray(props.backgroundColor) &&
          <LinearGradient id="bgGrad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor={props.backgroundColor[0]} />
            <Stop offset="1" stopColor={props.backgroundColor[1]} />
          </LinearGradient>
        }
        {
          Array.isArray(props.fillColor) &&
          <LinearGradient id="fillGrad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor={props.fillColor[0]} />
            <Stop offset="1" stopColor={props.fillColor[1]} />
          </LinearGradient>
        }
      </Defs>
      <Path
        stroke={getFillColor()}
        fill="none"
        strokeDasharray={`${circunference}, ${circunference}`}
        {
        ...{
          strokeWidth, d,
        }
        }
      />
      <AnimatedPath
        stroke={getBackgroundColor()}
        fill="none"
        strokeDasharray={`${circunference}, ${circunference}`}
        {
        ...{
          strokeDashoffset, strokeWidth, d,
        }
        }
      />
    </Svg>
  )
}
