import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addpost: () => {},
  addinitionpost: () => {},
  deletepost: () => {},
});

const postlistreducer = (currvalue, action) => {
  let newpostList = currvalue;
  if (action.type === "DELETE_POST") {
    newpostList = currvalue.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITION_POST") {
    newpostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostList = [action.payload, ...currvalue];
  }
  return newpostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(postlistreducer, []);

  const addpost = (
    userid,
    usertitle,
    userDescription,
    userLike,
    userDisLike,
    userHashtags
  ) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: usertitle,
        body_description: userDescription,
        user_id: userid,
        reactions: {
          Like: userLike,
          DisLike: userDisLike,
        },
        tags: userHashtags,
      },
    });
  };

  const addinitionpost = (posts) => {
    dispatchpostlist({
      type: "ADD_INITION_POST",
      payload: {
        posts,
      },
    });
  };

  const deletepost = useCallback(
    (postId) => {
      dispatchpostlist({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchpostlist]
  );

  return (
    <PostList.Provider
      value={{
        postlist,
        addpost,
        addinitionpost,
        deletepost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
