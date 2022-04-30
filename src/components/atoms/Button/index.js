import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CustomButton = ({title, type, onPress, mode}) => {
  if (type === 'like') {
    return (
      <View style={styles.container(type, mode)}>
        <Text style={styles.text(type, mode)}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(type, mode)}>
      <Text style={styles.text(type, mode)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: (type, mode) => ({
    backgroundColor:
      type === 'danger'
        ? colors.button.danger
        : type === 'primary'
        ? colors.button.primary
        : colors.button.neutral,
    width: mode === 'mini' ? 80 : 95,
    height: mode === 'mini' ? 40 : 45,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border.default,
  }),
  text: (type, mode) => ({
    fontFamily: fonts.main,
    textTransform: 'capitalize',
    fontSize: mode === 'mini' ? 12 : 16,
    textAlign: 'center',
    color:
      type === 'danger'
        ? colors.text.secondary
        : type === 'primary'
        ? colors.text.secondary
        : colors.text.main,
  }),
});
