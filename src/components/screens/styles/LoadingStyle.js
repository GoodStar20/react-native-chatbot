import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'src/theme';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  spinnerBackground: {
    height: deviceHeight * 0.6,
    justifyContent: 'center',
    alignContent: 'center',
  },
  spinnerText: {
    fontSize: 20,
    color: Colors.blue,
    textAlign: 'center',
  },
});
