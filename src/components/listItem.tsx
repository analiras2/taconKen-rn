import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors, verticalScale, horizontalScale} from '../res';
import {format} from '../utils/dateHelper';

const styles = (isEven: boolean): Styles =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isEven ? colors.gray : colors.white,
      height: verticalScale(93),
      flexDirection: 'row',
      padding: horizontalScale(16),
      borderBottomColor: colors.separator,
      borderBottomWidth: 1,
    },
    daysColumn: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });

interface Props {
  item: {
    id: number;
    object: string;
    person: string;
    createdAt: Date;
  };
  index: number;
  onPress(): void;
}

interface Styles {
  container: {
    flex: number;
    backgroundColor: string;
    height: number;
    flexDirection: 'row';
    padding: number;
    borderBottomColor: string;
    borderBottomWidth: number;
  };
  daysColumn: {flex: number; alignItems: 'flex-end'};
}

const ListItem = ({item, index, onPress}: Props): JSX.Element => {
  const isEven = index % 2;

  return (
    <TouchableOpacity style={styles(!!isEven).container} onPress={onPress}>
      <View style={{flex: 3}}>
        <Text>{item.object}</Text>
        <Text>{item.person}</Text>
        <Text>{format(item.createdAt)}</Text>
      </View>
      <View style={styles(!!isEven).daysColumn}>
        <Text>45 dias</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
