import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors, verticalScale} from '../res';

const styles = StyleSheet.create({
  container: {
    height: verticalScale(56),
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  title: {
    color: colors.white,
  },
});

interface Props {
  title: string;
}

const Toolbar = ({title}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Toolbar;
