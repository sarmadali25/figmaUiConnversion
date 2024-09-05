import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const TickMarkIcon: React.FC<IconPropsType> = ({
  width = 14,
  height = 14,
  color = '#1E1F24',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 .333a6.667 6.667 0 100 13.334A6.667 6.667 0 007 .333zm2.516 5.423a.667.667 0 00-1.032-.845L5.951 8.008l-.813-.813a.667.667 0 10-.943.943L5.53 9.471a.667.667 0 00.987-.049l3-3.666z"
        fill={color}
      />
    </Svg>
  );
};

export default TickMarkIcon;
