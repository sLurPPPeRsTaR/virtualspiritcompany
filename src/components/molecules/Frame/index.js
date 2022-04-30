import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton, Gap, ImageFrame} from '../../../components';
import {colors} from '../../../utils';

const Frame = ({photo}) => {
  const globalState = useSelector(state => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (globalState.isReset === true) {
      setLocalState({
        localCounter: 0,
      });
      dispatch({type: '_UPDATE_ISRESET', value: false});
    }
  }, [globalState.isReset === true]);

  const [localState, setLocalState] = useState({
    localCounter: 0,
  });

  const likeSum = () => {
    const sum = globalState.counter + localState.localCounter;
    return sum;
  };

  return (
    <View style={styles.container}>
      <ImageFrame photo={photo} />
      <View style={styles.buttonContainer}>
        <CustomButton title={`${likeSum()} like`} mode="mini" type="like" />
        <Gap width={60} />
        <CustomButton
          title="like"
          mode="mini"
          type="primary"
          onPress={() =>
            setLocalState({
              localCounter: localState.localCounter + 1,
            })
          }
        />
        <Gap width={10} />
        <CustomButton
          title="dislike"
          mode="mini"
          type="danger"
          onPress={() => {
            if (localState.localCounter > 0) {
              setLocalState({
                localCounter: localState.localCounter - 1,
              });
            }
          }}
        />
      </View>
    </View>
  );
};

export default Frame;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border.default,
    backgroundColor: colors.background.default,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    alignItems: 'center',
  },
});
