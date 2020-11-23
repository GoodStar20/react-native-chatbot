import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'src/theme';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: Colors.background,
    zIndex: 10,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 80 : 40,
    marginVertical: 25,
    paddingHorizontal: 30,
  },
  headerUserIcon: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  userName: {
    color: Colors.darkGray,
    fontSize: 22,
    fontWeight: '600',
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
  recipient: {
    fontSize: 20,
    color: Colors.darkGray,
    fontWeight: '500',
    marginBottom: 3,
  },
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
  messageContainer: {
    bottom: 10,
    flex: 1,
    left: 0,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 165 : 120,
    right: 0,
    backgroundColor: Colors.white,
  },
  sendBox: {
    backgroundColor: Colors.lightGreen,
    flexDirection: 'column',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
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
  sendingText: {
    color: Colors.green,
    fontSize: 16,
  },
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
