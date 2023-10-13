import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import posts from "../db/posts.json";
import Feed from "../components/Feed";

const PostsScreen = () => {
  return (
    <LinearGradient
      colors={["#FF00FE", "rgba(2,0,36,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="h-full"
      style={{ flex: 1, borderWidth: 0 }}
    >
      <Feed posts={posts} />
    </LinearGradient>
  );
};

export default PostsScreen;
