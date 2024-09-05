import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const NotificationIcon: React.FC<IconPropsType> = ({
  width = 28,
  height = 28,
  color = '#00051D',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.485 10.433a8.525 8.525 0 0117.03 0l.21 4.186c.007.162.049.32.12.464l1.432 2.863A2.111 2.111 0 0122.39 21h-2.673a5.835 5.835 0 01-11.434 0H5.611a2.11 2.11 0 01-1.888-3.054l1.431-2.863c.072-.145.114-.302.122-.464l.21-4.186zM10.7 21a3.501 3.501 0 006.602 0h-6.602zM14 4.667c-3.3 0-6.02 2.587-6.184 5.883l-.21 4.186a3.5 3.5 0 01-.365 1.39l-1.27 2.54h16.058l-1.27-2.54a3.5 3.5 0 01-.365-1.39l-.21-4.187A6.192 6.192 0 0014 4.668z"
        fill={color}
        fillOpacity={0.4549}
      />
    </Svg>
  );
};

export default NotificationIcon;
