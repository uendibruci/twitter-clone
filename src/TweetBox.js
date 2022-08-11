import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import axios from "axios";

const url =
  "https://api.airtable.com/v0/appdPaZazo01O7khx/Table%201?api_key=keySRHOI6xf7M04NJ";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweetDisplayName, setTweetDisplayName] = useState("");
  const [tweetUsername, setTweetUsername] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    const data = {
      fields: {
        displayName: tweetDisplayName,
        username: tweetUsername,
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://media2.giphy.com/media/fXTOderGCTjypOMKWN/200w.webp",
      },
      typecast: true,
    };
    axios
      .post(url, data)
      .then((r) => console.log(r.data))
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/474x/f7/3f/e3/f73fe3489a43a9ebe00a112beed25e1a.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <input
          onChange={(e) => setTweetDisplayName(e.target.value)}
          value={tweetDisplayName}
          className="tweetBox__displayNameInput"
          placeholder="Enter your name"
        />

        <input
          onChange={(e) => setTweetUsername(e.target.value)}
          value={tweetUsername}
          className="tweetBox__usernameInput"
          placeholder="Enter your username"
          type="text"
        />

        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
