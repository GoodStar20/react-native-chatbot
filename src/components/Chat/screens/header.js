import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from 'src/components/Chat/styles';
import { Images } from 'src/theme';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Image source={Images.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{props.customer}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
