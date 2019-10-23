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


const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.primaryDark} />
      <SafeAreaView>
        <Text>{strings.appName}</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({

});

export default App;
