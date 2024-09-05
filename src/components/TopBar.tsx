import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface TopBarProps {
  activeTab?: number;
  onTabPress: () => {};
}

const TopBar = ({activeTab, onTabPress}: TopBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => onTabPress(1)}>
        <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
          My feed
        </Text>
        {activeTab === 1 && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => onTabPress(2)}>
        <Text style={[styles.tabText, activeTab === 2 && styles.activeTabText]}>
          All posts
        </Text>
        {activeTab === 2 && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => onTabPress(3)}>
        <Text style={[styles.tabText, activeTab === 3 && styles.activeTabText]}>
          Groups
        </Text>
        {activeTab === 3 && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '500',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#000',
  },
});

export default TopBar;
