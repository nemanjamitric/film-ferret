import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { IconButton, Text } from 'react-native-paper';
import { PADDING } from '../constants/designConstants';
import { COLORS } from '../constants/colors';
import { FormikProps } from 'formik';
import { SearchFormProps } from '../screens/HomeScreen';

interface SearchBarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  formikProps: FormikProps<SearchFormProps>;
}

const SearchBar: React.FC<SearchBarProps> = ({ isExpanded, setIsExpanded, formikProps }) => {
  const width: SharedValue<number> = useSharedValue(50);

  console.log(isExpanded, width.value);
  

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, { duration: 300 }),
    };
  });

  const handleToggle = () => {
    if (isExpanded) {
      width.value = 50; // Shrink to circle
    } else {
      width.value = Dimensions.get('window').width - 2 * PADDING; // Expand to full width
    }
    setIsExpanded(!isExpanded);
  };

  const handlePress = () => {
    if (isExpanded) {
      formikProps.handleSubmit()
    } else {
      handleToggle()
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.titleText}>Film Ferret</Text>
      <Animated.View style={[styles.searchBar, animatedStyle]}>
        {isExpanded && (
          <>
            <IconButton icon="arrow-left" onPress={handleToggle} iconColor={COLORS.background} />
            <TextInput
              placeholder="Search"
              style={styles.textInput}
              autoFocus
              onChangeText={formikProps.handleChange('search')}
              value={formikProps.values.search}
              onSubmitEditing={() => formikProps.handleSubmit()}
            />
          </>
        )
        }
        <TouchableOpacity onPress={handlePress} style={styles.circle}>
          <IconButton icon="magnify" onPress={handlePress} iconColor={COLORS.background} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    left: PADDING,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 16,
  },
  searchBar: {
    backgroundColor: COLORS.accent,
    height: 50,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84, 
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: COLORS.accent,
    position: 'absolute',
    left: 0,
    top: 28,
    letterSpacing: 5,
    textShadowColor: 'rgba(255,255,255, 0.8)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  }
});

export default SearchBar;
