import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const SearchIcon: React.FC<IconPropsType> = ({
  width = 28,
  height = 28,
  color = '#000211',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A8 8 0 015 13z"
        fill={color}
        fillOpacity={0.6157}
      />
    </Svg>
  );
};

export default SearchIcon;
