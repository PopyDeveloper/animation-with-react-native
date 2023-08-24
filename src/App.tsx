
import React from 'react'
import {SafeAreaView, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Interpolate } from './Components/Interpolate';
import Animated, { FadeInLeft } from 'react-native-reanimated';

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
        <Animated.Text entering={FadeInLeft.duration(500)} style={{fontSize: 50, fontWeight: 'bold'}}>
          Popy
        </Animated.Text>
    </SafeAreaView>
  );
}

export default App;
