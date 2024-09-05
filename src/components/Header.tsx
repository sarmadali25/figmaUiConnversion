import {View, StyleSheet} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import LogoIcon from '../assets/svgs/ic_logo';
import SearchIcon from '../assets/svgs/ic_search';
import TopBar from './TopBar';

export default function Header(props) {
  const {activeTab, onTabPress, animatedStyle} = props;

  return (
    <Animated.View style={[styles.headerContainer, animatedStyle]}>
      <View style={styles.logoContainer}>
        <LogoIcon />
        <SearchIcon />
      </View>
      <TopBar activeTab={activeTab} onTabPress={onTabPress} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff', // Ensure the header has a background color
    maxHeight: 67,
    overflow: 'hidden', // Ensure content doesn't show outside of bounds
  },
  logoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
