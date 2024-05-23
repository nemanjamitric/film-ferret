import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PADDING } from '../constants/designConstants';
import { COLORS } from '../constants/colors';

type ScreenProps = {
    children: string | JSX.Element | JSX.Element[],
    withoutScrollView?: boolean
  }

const Screen: React.FC<ScreenProps> = ({ children, withoutScrollView }) => {
  if (withoutScrollView) {
    return <View style={styles.container}>{children}</View>;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: PADDING,
    backgroundColor: COLORS.background,
  },
});

export default Screen;
