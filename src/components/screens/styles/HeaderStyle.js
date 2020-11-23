import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from 'src/theme';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
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
});
