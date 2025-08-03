import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const FollowingTab = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "User123",
        username: "@user",

        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        isFollowing: true,
      },
      reactions: 357,
      isReacted: true,
    },
    {
      id: 2,
      user: {
        name: "User123",
        username: "@user",

        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        isFollowing: true,
      },
      reactions: 357,
      isReacted: true,
    },
  ]);
  const ProfileCard = ({ post }) => {
    const navigation = useNavigation();

    return (
      <View className="flex-row items-center justify-between px-4 ">
        <Pressable
          onPress={() => navigation.navigate("CommunityProfile")}
          className="flex-row items-center"
        >
          <Image
            source={{ uri: post.user.avatar }}
            className="w-10 h-10 rounded-full mr-3"
          />
          <View>
            <Text className="text-[16px] font-Medium text-textPrimary">
              {post.user.name}
            </Text>
            <Text className="text-[14px] font-Medium text-textPrimary">
              {post.user.username}
            </Text>
          </View>
        </Pressable>
        <Pressable
          className={`px-4 py-2 rounded-full ${
            post.user.isFollowing ? "bg-surfaceSecondary" : "bg-surfaceAction"
          }`}
          onPress={() => toggleFollow(post.id)}
        >
          <Text
            className={`text-base font-Medium ${
              post.user.isFollowing ? "text-textSecondary" : "text-white"
            }`}
          >
            {post.user.isFollowing ? "\u2713  Following" : "+  Follow"}
          </Text>
        </Pressable>
      </View>
    );
  };
  const toggleFollow = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              user: {
                ...post.user,
                isFollowing: !post.user.isFollowing,
              },
            }
          : post
      )
    );
  };
  return (
    <View className="flex-1">
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          gap: responsiveHeight(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        {posts.map((post) => (
          <ProfileCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowingTab;
