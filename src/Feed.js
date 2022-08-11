import React, { useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { useState } from "react";
import axios from "axios";

const url =
  "https://api.airtable.com/v0/appdPaZazo01O7khx/Table%201?api_key=keySRHOI6xf7M04NJ";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((r) => setPosts(r.data.records))
      .catch((error) => console.log(error));
  }, [posts]);

  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/*TweetBox*/}
      <TweetBox />
      {/*post*/}
      {posts.map((post) => (
        <Post
          displayName={post.fields.displayName}
          username={post.fields.username}
          verified={post.fields.verified}
          text={post.fields.text}
          avatar={post.fields.avatar}
          image={post.fields.image}
        />
      ))}
    </div>
  );
}

export default Feed;
