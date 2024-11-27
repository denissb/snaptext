import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import { SystemBars } from "react-native-edge-to-edge";

import {setup as i18nSetup} from './services/i18n';
import Camera from './components/Camera';
import {COLORS} from './settings';

const Wrapper = Platform.OS === 'ios' ? SafeAreaView : View;

i18nSetup();

const App: React.FC = () => {
  return (
    <>
      <SystemBars
        style='auto'
      />
      <Wrapper style={styles.container}>
        <Camera />
      </Wrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default App;
