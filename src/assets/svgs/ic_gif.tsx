import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconPropsType {
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
}

const GifIcon: React.FC<IconPropsType> = ({
  width = 18,
  height = 18,
  color = '#1E1F24',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.25 2.5A2.25 2.25 0 012.5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 01.25 11.5v-9zM2.5 7.215c0 1.155.69 1.848 1.86 1.848 1.075 0 1.765-.606 1.765-1.545v-.125c0-.434-.2-.626-.663-.626h-.604c-.313 0-.475.137-.475.402 0 .267.165.413.475.413h.109v.046c0 .27-.224.457-.551.457-.448 0-.678-.3-.678-.876v-.39c0-.581.23-.866.713-.866.243 0 .403.114.559.225.067.048.133.095.204.133.089.049.189.081.307.081.288 0 .492-.198.492-.477 0-.265-.195-.51-.498-.687a2.33 2.33 0 00-1.161-.29c-1.138 0-1.854.712-1.854 1.815v.462zm4.768 1.79c.395 0 .61-.233.61-.655V5.63c0-.419-.22-.655-.619-.655-.398 0-.619.233-.619.655v2.72c0 .419.227.654.628.654zm2.526-.655c0 .425-.212.654-.601.654-.404 0-.637-.238-.637-.654V5.624c0-.384.236-.62.616-.62h1.871c.263 0 .457.204.457.48 0 .277-.194.472-.457.472h-1.25v.73h1.103c.274 0 .457.186.457.46 0 .27-.186.46-.457.46H9.794v.744z"
        fill={color}
      />
    </Svg>
  );
};

export default GifIcon;
