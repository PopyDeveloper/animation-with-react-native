import {useRef} from 'react';
import React, {Animated, ScrollView} from 'react-native';

export function EventAnim() {
  const ev = useRef(new Animated.Value(0)).current;

  const backgroundInterpolate = ev.interpolate({
    inputRange: [0, 300],
    outputRange: ['yellow', 'purple'],
  });

  const bgStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <Animated.View style={[bgStyle, {flex: 1, height: '100%', width: '100%'}]}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: ev,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}></ScrollView>
    </Animated.View>
  );
}
