import {useEffect, useRef} from 'react';
import React, {Animated} from 'react-native';

export function Lopping() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translation, {
        toValue: 100,
        duration: 500,
        useNativeDriver: true,
      }),
    ).start();
  });

  const interpolated = translation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        transform: [
          {
            rotate: interpolated,
          },
        ],
      }}></Animated.View>
  );
}
