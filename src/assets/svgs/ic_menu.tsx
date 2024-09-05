import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const MenuIcon: React.FC<IconPropsType> = ({
  width = 28,
  height = 28,
  color = '#00051D',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 5.833a2.333 2.333 0 114.667 0 2.333 2.333 0 01-4.667 0zm8.167 0a2.333 2.333 0 114.666 0 2.333 2.333 0 01-4.666 0zm8.166 0a2.333 2.333 0 114.667 0 2.333 2.333 0 01-4.667 0zM3.5 14a2.333 2.333 0 114.667 0A2.333 2.333 0 013.5 14zm8.167 0a2.333 2.333 0 114.666 0 2.333 2.333 0 01-4.666 0zm8.166 0a2.333 2.333 0 114.667 0 2.333 2.333 0 01-4.667 0zM3.5 22.167a2.333 2.333 0 114.667 0 2.333 2.333 0 01-4.667 0zm8.167 0a2.333 2.333 0 114.666 0 2.333 2.333 0 01-4.666 0zm8.166 0a2.333 2.333 0 114.667 0 2.333 2.333 0 01-4.667 0z"
        fill={color}
        fillOpacity={0.4549}
      />
    </Svg>
  );
};

export default MenuIcon;
