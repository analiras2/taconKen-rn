import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import colors from '../res/colors';
import strings from '../res/strings';

const BottomNavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={() => { }}>
        <Text>{strings.lent}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={() => { }}>
        <Text>{strings.borrowed}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    flexDirection: 'row',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BottomNavigationBar;
