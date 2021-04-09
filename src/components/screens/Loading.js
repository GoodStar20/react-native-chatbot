import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from 'src/components/screens/styles/LoadingStyle';
import { Colors } from 'src/theme';

const Loading = () => {
  return (
    <View style={styles.spinnerBackground} scrollEnabled={false}>
      <ActivityIndicator size="large" color={Colors.blue} />
      <Text style={styles.spinnerText}>Please wait...</Text>
    </View>
  );
};

export default Loading;
