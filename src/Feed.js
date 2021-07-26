import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
// import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        "https://twirp-bc3e2-default-rtdb.firebaseio.com/posts.json"
      );

      if (!response.ok) {
        throw new Error("Something went Wrong!!");
      }

      const responseData = await response.json();
      // console.log(responseData);
      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          displayName: responseData[key].displayName,
          username: responseData[key].username,
          verified: responseData[key].verified,
          text: responseData[key].text,
          avatar: responseData[key].avatar,
          image: responseData[key].image,
        });
      }

      setPosts(loadedData);
    };
    FetchData();
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox*/}
      <TweetBox />

      {/*Post*/}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
