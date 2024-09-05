import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedScrollHandler,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import Header from '../../components/Header';
import PostInput from '../../components/CreatePost';
import {posts} from '../../utils/mockData';
import {PostItem} from './Posts';
import {useNavigation} from '@react-navigation/native';
import {DH} from '../../utils/responsive';

function HomeScreen() {
  const [activeTab, setActiveTab] = useState(1);
  const scrollY = useSharedValue(0);
  const navigation = useNavigation();

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  const headerHeight = 67;

  const animatedStyle = useAnimatedStyle(() => {
    const clampedScrollY = Math.min(scrollY.value, headerHeight);
    const headerOpacity = clampedScrollY / headerHeight;
    return {
      height: withTiming(headerHeight - clampedScrollY, {
        duration: 16,
        easing: Easing.linear,
      }),
      opacity: withTiming(1 - headerOpacity, {
        duration: 16,
        easing: Easing.linear,
      }),
    };
  });

  const updateTabBarOpacity = opacity => {
    navigation.setOptions({
      tabBarStyle: {
        opacity: opacity,
        position: 'absolute',
        backgroundColor: opacity === 1 ? '#fff' : `rgba(0, 0, 0, 0.75)`,
      },
    });
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
      // Make the tab bar transparent while scrolling
      runOnJS(updateTabBarOpacity)(0.5);
    },
    onEndDrag: () => {
      // Restore the tab bar opacity when scrolling stops
      runOnJS(updateTabBarOpacity)(1);
    },
    onMomentumEnd: () => {
      // Restore the tab bar opacity when scrolling fully stops
      runOnJS(updateTabBarOpacity)(1);
    },
  });

  return (
    <View style={styles.container}>
      <Header
        activeTab={activeTab}
        onTabPress={handleTabPress}
        animatedStyle={animatedStyle}
      />
      <Animated.FlatList
        data={posts}
        renderItem={({item}) => <PostItem post={item} />}
        ListHeaderComponent={<PostInput />}
        ListFooterComponent={<View style={{marginBottom: DH(8)}} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        // bounces={false}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListContent: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
});
