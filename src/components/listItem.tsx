import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { colors, verticalScale, horizontalScale } from '../res';
import { white } from 'ansi-colors';
import { format, FORMATS } from '../utils/dateHelper';

type Props = {
  item: {
    id: number,
    object: string,
    person: string,
    createdAt: Date
  },
  index: number,
  onPress(): void
}

const ListItem = (props: Props) => {
  const isEven = props.index % 2

  return (
    <View style={styles(isEven).container}>
      <View style={{ flex: 3 }}>
        <Text>{props.item.object}</Text>
        <Text>{props.item.person}</Text>
        <Text>{format(props.item.createdAt)}</Text>
      </View>
      <View style={styles(isEven).daysColumn} >
        <Text>45 dias</Text>
      </View>
    </View>
  );
};

const styles = isEven => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isEven ? colors.gray : colors.white,
    height: verticalScale(93),
    flexDirection: 'row',
    padding: horizontalScale(16),
    borderBottomColor: colors.separator,
    borderBottomWidth: 1
  },
  daysColumn: {
    flex: 1,
    alignItems: 'flex-end'
  }
});

export default ListItem;
