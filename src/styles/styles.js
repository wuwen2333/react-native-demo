/**
 * 通用样式
 */
import Color from './colors';
import Font from './fonts';
import Size from './sizes';

export default {
	// Default
	container: {
		position: 'relative',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#F5FCFF',
	},
	containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  windowSize: {
    height: Size.screen.height,
    width: Size.screen.width,
  },
}