import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const BulletListIcon: React.FC<IconPropsType> = ({
  width = 14,
  height = 12,
  color = '#1E1F24',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 12" fill="none">
      <Path
        d="M2.5 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM7.75 1.5a.75.75 0 000 1.5H13a.75.75 0 000-1.5H7.75zM2.5 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM7.75 9a.75.75 0 000 1.5H13A.75.75 0 0013 9H7.75z"
        fill={color}
      />
    </Svg>
  );
};

export default BulletListIcon;
