import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addpost } = useContext(PostList);

  const userIdElement = useRef();
  const userTitleElement = useRef();
  const userDescriptionElement = useRef();
  const userLikeElement = useRef();
  const userDisLikeElement = useRef();
  const userHashtagsElement = useRef();

  const addPostItems = (event) => {
    event.preventDefault();
    const userid = userIdElement.current.value;
    const usertitle = userTitleElement.current.value;
    const userDescription = userDescriptionElement.current.value;
    const userLike = userLikeElement.current.value;
    const userDisLike = userDisLikeElement.current.value;
    const userHashtags = userHashtagsElement.current.value.split(" ");
    console.log(event);

    userIdElement.current.value = "";
    userTitleElement.current.value = "";
    userDescriptionElement.current.value = "";
    userLikeElement.current.value = "";
    userDisLikeElement.current.value = "";
    userHashtagsElement.current.value = "";

   

    addpost(
      userid,
      usertitle,
      userDescription,
      userLike,
      userDisLike,
      userHashtags
    );
  };

  return (
    <>
      <form className="spacing_postform" onSubmit={addPostItems}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="id"
            placeholder="Enter Your Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={userTitleElement}
            id="title"
            placeholder="Enter Your Title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discription" className="form-label">
            Post Description
          </label>
          <textarea
            rows="04"
            type="text"
            className="form-control"
            id="discription"
            ref={userDescriptionElement}
            placeholder="Enter Your Discription"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Like" className="form-label">
            Reaction Like
          </label>
          <input
            type="text"
            className="form-control"
            id="Like"
            ref={userLikeElement}
            placeholder="Enter Your TagLTotal Like Here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Dislike" className="form-label">
            Riaction Dislike
          </label>
          <input
            type="text"
            className="form-control"
            id="Dislike"
            ref={userDisLikeElement}
            placeholder="Enter Your Total Dislike Here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Hashtags" className="form-label">
            Hashtags
          </label>
          <input
            type="text"
            className="form-control"
            id="Hashtags"
            ref={userHashtagsElement}
            placeholder="Enter Your Tags Here"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
