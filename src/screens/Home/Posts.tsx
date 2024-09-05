import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LikeIcon from '../../assets/svgs/ic_like';
import CommentIcon from '../../assets/svgs/ic_comment';
import ShareIcon from '../../assets/svgs/ic_share';
import DotGridIcon from '../../assets/svgs/ic_dotGrid';
import {DH} from '../../utils/responsive';
import {LinkPreview} from '@flyerhq/react-native-link-preview';
import VotingComponent from '../../components/VotingComponent';

export const PostItem = ({post}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={styles.headerText}>
          <View style={styles.headerRow}>
            <Text style={styles.name}>{post.name}</Text>
            {post?.locationIcon ? (
              <>
                <Text>{' in '}</Text>
                <Image
                  source={post?.locationIcon}
                  style={styles.locationImage}
                />
                <Text style={styles.location}>{post.location}</Text>
              </>
            ) : (
              <Text style={styles.location}> in {post.location}</Text>
            )}
          </View>
          <Text style={styles.time}>{post.time}</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <DotGridIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.imageContainer}>
        {post?.images?.map((image, index) => (
          <Image key={index} source={image} style={styles.postImage} />
        ))}
      </View>
      {post?.urlAttachment ? (
        <LinkPreview
          text={post.urlAttachment}
          enableAnimation={true}
          renderHeader={string => <Text />}
          renderDescription={_ => <Text />}
          renderText={str => (
            <Text style={{fontWeight: '500', fontSize: 14}}>{str}</Text>
          )}
          renderTitle={_ => (
            <Text style={{fontWeight: '600', fontSize: '16'}}>
              Link title here
            </Text>
          )}
          header={''}
          metadataContainerStyle={{}}
          containerStyle={{
            borderRadius: 10,
            backgroundColor: '#00104010',
            marginBottom: 12,
          }}
        />
      ) : (
        <></>
      )}
      {post?.poll && <VotingComponent pollData={post.poll} />}
      <View style={styles.footer}>
        <View style={styles.likeCommentContainer1}>
          {post?.likesAvatar ? (
            <>
              {post?.likesAvatar.map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={[
                    styles.likeAvatar,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                      marginLeft: index === 0 ? 0 : -12,
                      zIndex: index,
                    },
                  ]}
                />
              ))}
              <Text style={styles.likes}>{`and ${post.likes} others`}</Text>
            </>
          ) : (
            <Text style={styles.likes}>{`${post.likes} others`}</Text>
          )}
        </View>
        <Text style={styles.comments}>{`${post.comments} comments`}</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <LikeIcon />
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <CommentIcon />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <ShareIcon />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
      {post?.comments ? (
        <>
          <View style={styles.commentContainer}>
            <Image source={post.avatar} style={styles.commentAvatar} />
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentText}>Jane Smith</Text>
              <Text style={styles.commentContent}>Welcome to Portugal!</Text>
            </View>
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 2,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  location: {
    fontSize: 16,
    color: '#0073b1',
  },
  time: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  menuButton: {
    padding: 4,
  },
  menuText: {
    fontSize: 24,
    color: '#777',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000',
  },
  content: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    lineHeight: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  postImage: {
    width: '48%',
    height: 225,
    borderRadius: 2,
  },
  locationImage: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  likeCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  likes: {
    fontSize: 14,
    color: '#333',
  },
  comments: {
    fontSize: 14,
    color: '#333',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 22,
  },
  actionButton: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: '#1E1F24',
    fontWeight: '600',
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: DH(2.5),
    paddingVertical: 8, // Adjust padding to ensure the comment section looks balanced.
    paddingHorizontal: 10,
    height: DH(7.5),
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#00104010',
    gap: 3,
  },
  commentAvatar: {
    width: 25,
    height: 25,
    borderRadius: 15,
    marginRight: 8,
  },
  commentTextContainer: {
    gap: 3,
  },
  commentText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginRight: 4,
    flexShrink: 1, // This ensures the text doesn't overflow in smaller screens.
  },
  commentContent: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    flexShrink: 1, // This also ensures the text doesn't overflow.
  },
  likeCommentContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarGroup: {
    flexDirection: 'row',
    marginRight: 8,
  },
  likeAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
