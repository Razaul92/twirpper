import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Widgets.css";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  //rfce
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055020"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RazaulM"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/RazaulMustafa"}
          options={{ text: "#reactjs is awesome", via: "RazaulMustafa" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
