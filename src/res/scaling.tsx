// eslint-disable-next-line import/prefer-default-export
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const horizontalScale = (size: number): number => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number => (height / guidelineBaseHeight) * size;
export const fontScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;
