import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const ShareIcon: React.FC<IconPropsType> = ({
  width = 18,
  height = 14,
  color = '#1E1F24',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.443.316a.75.75 0 01.805.123l6.75 6a.75.75 0 010 1.122l-6.75 6A.75.75 0 019 13v-2.62c-2.692.043-4.132.322-5.008.76-.885.442-1.262 1.077-1.821 2.195A.75.75 0 01.75 13c0-3.213.46-5.63 1.935-7.214C4.057 4.313 6.15 3.72 9 3.636V1a.75.75 0 01.443-.684zM10.5 2.67v1.705a.75.75 0 01-.75.75c-3.14 0-4.924.563-5.967 1.683-.73.784-1.182 1.93-1.393 3.605.264-.227.57-.434.93-.615 1.297-.648 3.236-.923 6.43-.923a.75.75 0 01.75.75v1.705L15.371 7 10.5 2.67z"
        fill={color}
      />
    </Svg>
  );
};

export default ShareIcon;
