import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { strings, verticalScale, colors } from '../res';

const BottomNavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={() => { }}>
        <Text style={styles.title}>{strings.lent}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={() => { }}>
        <Text style={styles.title}>{strings.borrowed}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(58),
    flexDirection: 'row',
    backgroundColor: colors.primary
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: colors.white
  }
});

export default BottomNavigationBar;
