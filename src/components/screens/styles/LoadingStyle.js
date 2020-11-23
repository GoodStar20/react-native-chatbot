import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'src/theme';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  spinnerBackground: {
    top: deviceHeight * 0.5,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
  spinnerText: {
    fontSize: 20,
    color: Colors.blue,
    textAlign: 'center',
  },
});
