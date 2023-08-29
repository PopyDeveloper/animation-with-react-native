
import React, { useState } from 'react'
import {Pressable, SafeAreaView, Text, TouchableOpacity, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { BookLoading } from './Components/LoadingWLotties/BookLoading';
import { Loren } from './Components/LoremIpson/Lorem';

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false)

  const showLoading = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  return (
    <SafeAreaView
      style={[
        // backgroundStyle,
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
      ]}>

        {
          loading &&
          <BookLoading />
        }


        <TouchableOpacity
          style={{
            height: 100,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
            backgroundColor: 'cyan'
          }}

          onPress={showLoading}
        >
          <Text>
          Show Loading
          Testando CI 2
          </Text>
        </TouchableOpacity>
        {/* <Animated.Text entering={FadeInLeft.duration(500)} style={{fontSize: 50, fontWeight: 'bold'}}>
          Popy
        </Animated.Text> */}
        <Loren />

       
    </SafeAreaView>
  );
}

export default App;
