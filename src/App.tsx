import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Spring} from './Components/Spring';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={[
        backgroundStyle,
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
      ]}>
      {/* <Interpolate /> */}
      {/* <Lopping /> */}
      <Spring />
    </SafeAreaView>
  );
}

export default App;
