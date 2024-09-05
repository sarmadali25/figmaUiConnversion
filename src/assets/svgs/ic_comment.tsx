import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const CommentIcon: React.FC<IconPropsType> = ({
  width = 15,
  height = 16,
  color = '#1E1F24',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 2a6 6 0 00-5.444 8.527c.141.304.193.662.106 1.019l-.584 2.393 2.497-.563c.341-.078.682-.029.973.102A6 6 0 107.5 2zM0 8a7.5 7.5 0 114.434 6.847.069.069 0 00-.03-.008l-2.496.563a1.5 1.5 0 01-1.787-1.818l.584-2.393c0-.001 0-.012-.009-.031A7.475 7.475 0 010 8z"
        fill={color}
      />
    </Svg>
  );
};

export default CommentIcon;
