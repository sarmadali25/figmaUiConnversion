import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const getScreenHeight = () => {
  return height;
};

const getScreenWidth = () => {
  return width;
};

const DH = (inputHeight: string | number) => {
  const heightPercentageToDP = (heightPercent: string | number) => {
    const elemHeight =
      typeof heightPercent === 'number'
        ? heightPercent
        : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(
      (getScreenHeight() * elemHeight) / 100,
    );
  };
  return heightPercentageToDP(inputHeight);
};

const DW = (inputWidth: string | number) => {
  const widthPercentageToDP = (widthPercent: string | number) => {
    const elemWidth =
      typeof widthPercent === 'number'
        ? widthPercent
        : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((getScreenWidth() * elemWidth) / 100);
  };

  return widthPercentageToDP(inputWidth);
};

export {DH, DW};
