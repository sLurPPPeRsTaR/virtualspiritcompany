import React from 'react';
import {Image, StyleSheet} from 'react-native';

const ImageFrame = ({photo}) => {
  return <Image source={photo} style={styles.avatar} />;
};

export default ImageFrame;

const styles = StyleSheet.create({
  avatar: {
    width: 352,
    height: 198,
    alignSelf: 'center',
  },
});
