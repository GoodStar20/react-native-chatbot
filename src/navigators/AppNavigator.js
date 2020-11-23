import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Chat from 'src/components/Chat';

export default createAppContainer(
  createSwitchNavigator(
    {
      chat: {
        screen: Chat,
        navigationOptions: ({ navigation }) => {
          return {
            headerShown: false,
          };
        },
      },
    },
    {
      initialRouteName: 'chat',
    },
  ),
);
