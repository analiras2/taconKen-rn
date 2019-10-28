import React from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import {colors, strings} from './res';
import BottomNavigationBar from './components/bottomNavigationBar';
import ToolBar from './components/toolbar';
import ListItem from './components/listItem';

const list = [
  {
    id: 0,
    object: 'Roupa',
    person: 'Tai',
    createdAt: new Date(),
  },
  {
    id: 1,
    object: 'Tênis',
    person: 'Carol',
    createdAt: new Date(),
  },
  {
    id: 2,
    object: 'Chinelo',
    person: 'Bruna',
    createdAt: new Date(),
  },
  {
    id: 4,
    object: 'Colar',
    person: 'Elisa',
    createdAt: new Date(),
  },
];

interface Item {
  id: number;
  object: string;
  person: string;
  createdAt: Date;
}

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor={colors.primaryDark} />
      <ToolBar title={strings.appName} />
      <View style={{flex: 1}}>
        <FlatList
          data={list}
          keyExtractor={(item: Item): string => item.id.toString()}
          renderItem={({item, index}): JSX.Element => (
            <ListItem item={item} index={index} onPress={(): void => {}} />
          )}
        />
      </View>
      <BottomNavigationBar />
    </>
  );
};

export default App;
