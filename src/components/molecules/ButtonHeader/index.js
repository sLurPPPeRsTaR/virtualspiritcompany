import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../../components';
import {useDispatch} from 'react-redux';

const ButtonHeader = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <CustomButton
        type="primary"
        title="Like All"
        onPress={() => dispatch({type: '_INCREASE_COUNTER'})}
      />
      <CustomButton
        title="Reset All"
        onPress={() => dispatch({type: '_RESET_COUNTER'})}
      />
      <CustomButton
        type="danger"
        title="Dislike All"
        onPress={() => dispatch({type: '_DECREASE_COUNTER'})}
      />
    </View>
  );
};

export default ButtonHeader;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
});
