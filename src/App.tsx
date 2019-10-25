import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from './res/colors';
import strings from './res/strings';
import BottomNavigationBar from './components/bottomNavigationBar';
import ToolBar from './components/toolbar';

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.primaryDark} />
      <ToolBar title={strings.appName} />
      <View style={styles.container}>
        <Text>{strings.appName}</Text>
      </View>
      <BottomNavigationBar />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});

export default App;
