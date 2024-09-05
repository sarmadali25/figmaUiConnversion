import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const MultiMediaIcon: React.FC<IconPropsType> = ({
  width = 18,
  height = 18,
  color = '#1E1F24',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M3.688 4.625a.937.937 0 100-1.875.937.937 0 000 1.875z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75.5A2.25 2.25 0 00.5 2.75v6A2.25 2.25 0 002.75 11H5v2.25a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25v-6A2.25 2.25 0 0013.25 5H11V2.75A2.25 2.25 0 008.75.5h-6zM9.5 5V2.75A.75.75 0 008.75 2h-6a.75.75 0 00-.75.75v3.848l.252-.168a2.25 2.25 0 012.496 0l.332.222A2.251 2.251 0 017.25 5H9.5zM5 8.401l-1.084-.723a.75.75 0 00-.832 0L2 8.401v.349c0 .414.336.75.75.75H5V8.401zm4.602 3.588a.563.563 0 01-.852-.482V8.993c0-.437.477-.707.852-.482l2.094 1.257a.562.562 0 010 .964L9.602 11.99z"
        fill={color}
      />
    </Svg>
  );
};

export default MultiMediaIcon;
