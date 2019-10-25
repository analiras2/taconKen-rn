import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const horizontalScale = size => width / guidelineBaseWidth * size;
export const verticalScale = size => height / guidelineBaseHeight * size;
export const fontScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
