import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import avatar from '../assets/images/avatar.png'; // Adjust the path according to your project structure
import MultiMediaIcon from '../assets/svgs/ic_multimedia';
import GifIcon from '../assets/svgs/ic_gif';
import BulletListIcon from '../assets/svgs/ic_bulletList';
import {DH, DW} from '../utils/responsive';

const PostInput = () => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        placeholderTextColor="#888"
      />
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <MultiMediaIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <GifIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <BulletListIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: DH(3),
    paddingHorizontal: DW(4.5),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  input: {
    flex: 1,
    height: 36,
    paddingLeft: DW(3),
    backgroundColor: '#f1f1f1',
    borderRadius: 6,
    fontSize: 16,
    // marginHorizontal: 12,
  },
  iconsContainer: {
    // paddingTop: DH(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    paddingHorizontal: DW(1.25),
  },
});

export default PostInput;
