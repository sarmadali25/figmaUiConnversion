import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const LogoIcon: React.FC<IconPropsType> = ({
  width = 28,
  height = 28,
  color = '#FCFCFD',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Rect width={28} height={28} rx={14} fill="#1E1F24" />
      <Path
        d="M19.765 21C21.56 21 23 19.576 23 17.84c0-1.736-1.441-3.16-3.235-3.16-1.697-.109-2.434 1.299-3.523 2.237-.609.47-1.377.735-2.242.735a3.659 3.659 0 01-2.242-.735c-1.073-.923-1.81-2.346-3.523-2.237C6.44 14.68 5 16.105 5 17.84 5 19.576 6.441 21 8.235 21h11.53zM19.765 7C21.56 7 23 8.423 23 10.16c0 1.736-1.441 3.16-3.235 3.16-1.697.109-2.434-1.299-3.523-2.237-.609-.47-1.377-.736-2.242-.736s-1.617.266-2.242.736c-1.073.923-1.81 2.346-3.523 2.236C6.44 13.32 5 11.896 5 10.16 5 8.424 6.441 7 8.235 7h11.53z"
        fill={color}
      />
    </Svg>
  );
};

export default LogoIcon;
