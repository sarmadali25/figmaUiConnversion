import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const DotGridIcon: React.FC<IconPropsType> = ({
  width = 18,
  height = 18,
  color = '#000211',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill={color}
        fillOpacity={0.6157}
      />
    </Svg>
  );
};

export default DotGridIcon;
