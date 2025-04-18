import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const statusbarHeight = getStatusBarHeight();
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const ANDROID_VERSION = Platform.Version;

export const statusbarHeightMobile = IS_IOS ? 0 : getStatusBarHeight();
