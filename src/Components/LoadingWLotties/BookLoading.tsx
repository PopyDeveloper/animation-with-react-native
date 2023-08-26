import LottieView from 'lottie-react-native'
import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import assets  from '../../Assets/index'
import { BlurView } from '@react-native-community/blur';

 const Book = () => {
  return (
    // <View style={{width: 100, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
      <LottieView style={{width: 400, height: 400}} source={assets.lottieFiles.lup} autoPlay loop />
    // </View>
  )
}


export const BookLoading = () => {

  const { width, height} = useWindowDimensions()
  return(
    <BlurView
      style={{position: 'absolute', zIndex: 9999, width, height, alignItems: 'center', justifyContent: 'center'}}
      blurType="light"
      blurAmount={2}
      reducedTransparencyFallbackColor="white"
      >
      <Book />
    </BlurView>
  )
}