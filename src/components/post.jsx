import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ Post }) => {
  const { deletepost } = useContext(PostList);

  return (
    <>
      <div className="card post_card" key="card" style={{ width: "30rem" }}>
        <div className="card-body" key="card-body">
          <h5 className="card-title">
            {Post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <button
                key="delbtn"
                type="button"
                className="btn btn-danger space_delete"
                onClick={() => deletepost(Post.id)}
              >
                <MdDelete key="mddelete" />
              </button>
            </span>
          </h5>
          <p className="card-text" key="cerd-text">
            {Post.body_description}
          </p>
          {Post.tags.map((tag) => (
            <span className="tags_spacing badge text-bg-primary " key={tag}>
              {tag}
            </span>
          ))}
          <div class="alert alert-primary" role="alert" key="alert">
            Liks's Are {Post.reactions.Like} And Dislike's Are
            {Post.reactions.DisLike}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
