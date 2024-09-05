import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const LandingIcon: React.FC<PropsType> = ({
  width = 28,
  height = 28,
  color = '#1E1F24',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M9.333 2.333a7 7 0 100 14 7 7 0 000-14zM16.917 15.167a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM17.5 11.083a4.083 4.083 0 118.167 0 4.083 4.083 0 01-8.167 0z"
        fill={color}
      />
    </Svg>
  );
};

export default LandingIcon;
