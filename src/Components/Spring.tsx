import {useRef} from 'react';
import React, {Animated, TouchableOpacity} from 'react-native';

export function Spring() {
  const bubble = useRef(new Animated.Value(1)).current;

  const press = () => {
    Animated.spring(bubble, {
      toValue: 2,
      friction: 2,
      tension: 160,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(bubble, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <Animated.View style={{transform: [{scale: bubble}]}}>
      <TouchableOpacity
        onPress={press}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
      />
    </Animated.View>
  );
}
