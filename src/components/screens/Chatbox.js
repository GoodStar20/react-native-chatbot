import React, { useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from 'src/components/screens/styles/ChatboxStyle';
import { Colors } from 'src/theme';

const Chatbox = (props) => {
  const { message, setMessage, sendMessage, currentQus } = props;
  const [pathState, setPathState] = useState(true);

  useEffect(() => {
    if (typeof currentQus.validation === 'boolean') {
      setPathState(currentQus.validation);
    }
  }, [currentQus]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled
    >
      <View style={styles.sendBox}>
        <TextInput
          value={message}
          onChangeText={(value) => setMessage(value)}
          placeholderTextColor={Colors.lighterGray}
          autoCapitalize="none"
          style={styles.sendInput}
          secureTextEntry={currentQus.style === 'password'}
          placeholder="Type here..."
          editable={pathState}
        />
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={sendMessage}
          disabled={!pathState}
        >
          <Icon type="Feather" name="send" style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chatbox;
