import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'src/theme';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  messageContainer: {
    bottom: 10,
    flex: 1,
    left: 0,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 165 : 120,
    right: 0,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    marginBottom: Platform.OS === 'ios' ? 120 : 100,
    paddingHorizontal: 30,
    marginTop: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  messageRow: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  recipient: {
    fontSize: 20,
    color: Colors.darkGray,
    fontWeight: '500',
    marginBottom: 3,
  },
  sender: {
    fontSize: 20,
    color: Colors.blue,
    fontWeight: '500',
    marginBottom: 3,
  },
  message: {
    fontSize: 18,
    color: Colors.lightGray,
  },
});
