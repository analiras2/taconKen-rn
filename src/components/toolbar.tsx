import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import colors from '../res/colors';

type Props = {
  title: string
}

const Toolbar = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  },
  title: {
    color: colors.white
  }
});

export default Toolbar;
