import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
// import db from "./firebase";

function TweetBox() {
  //rfce
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    await fetch("https://twirp-bc3e2-default-rtdb.firebaseio.com/posts.json", {
      method: "Post",
      body: JSON.stringify({
        displayName: "Razaul",
        username: "Mustafa",
        verified: true,
        text: tweetMessage,
        avatar: "images/profile2.jpeg",
        image: tweetImage,
      }),
    });

    // db.collection("posts").add({
    //   displayName: "Razaul",
    //   username: "Musafa",
    //   verified: true,
    //   text: tweetMessage,
    //   avatar:
    //     "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    //   image: tweetImage,
    // });
    // console.log("sent");
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="images/profile2.jpeg" />
          <input
            placeholder="What's happening?"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
