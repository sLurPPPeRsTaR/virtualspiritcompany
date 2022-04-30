import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DummyImg1, DummyImg2, DummyImg3} from '../../assets';
import {ButtonHeader, Frame, Gap} from '../../components';
import {colors} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <ButtonHeader />
        <Gap height={15} />
        <Frame photo={DummyImg1} />
        <Gap height={15} />
        <Frame photo={DummyImg2} />
        <Gap height={15} />
        <Frame photo={DummyImg3} />
        <Gap height={35} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, padding: 4},
  content: {
    borderWidth: 0.4,
    borderColor: colors.border.default,
    flex: 1,
    padding: 15,
    backgroundColor: colors.background.main,
  },
});
