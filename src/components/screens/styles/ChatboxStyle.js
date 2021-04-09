import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'src/theme';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    bottom: Platform.OS === 'ios' ? 30 : 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    backgroundColor: Colors.background,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  sendBox: {
    backgroundColor: Colors.lightGreen,
    flexDirection: 'column',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
  },
  sendInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    color: Colors.black,
    fontSize: 17,
    height: 50,
    marginRight: 15,
    paddingLeft: 15,
    borderColor: Colors.lightBlue,
    borderWidth: 1,
    flex: 1,
  },
  sendBtn: {
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    borderRadius: 5,
  },
  sendIcon: {
    color: Colors.green,
    fontSize: 25,
    color: 'white',
    margin: 10,
    alignSelf: 'center',
    paddingHorizontal: 7,
  },
});
