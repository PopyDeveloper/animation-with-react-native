import {useEffect, useRef} from 'react';
import React, {Animated} from 'react-native';

export function Interpolate() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  });

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: translation.interpolate({
          inputRange: [0, 100],
          outputRange: ['purple', 'yellow'],
        }),
        opacity: translation.interpolate({
          inputRange: [25, 50, 100],
          outputRange: [0, 1, 0],
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        }),
        transform: [
          {translateX: translation},
          {
            rotate: translation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}></Animated.View>
  );
}
