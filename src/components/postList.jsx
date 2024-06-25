import { useContext, useEffect } from "react";
import Post from "./post";
import { PostList as postListdata } from "../store/post-list-store";
import Welcomemsg from "./welcomemsg";

const PostList = () => {
  const { postlist, addinitionpost } = useContext(postListdata);

  useEffect( () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addinitionpost(data.posts));
  },[]);
  return (
    <>
      {postlist.length === 0 && <Welcomemsg />}
      {postlist.map((post) => (
        <Post key={postlist.id} Post={post} />
      ))}
    </>
  );
};

export default PostList;
