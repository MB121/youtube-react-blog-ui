import { Link, useParams } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost(props) {
  const { postTitle, img, postTime, singlePostDesc1, singlePostDesc2, author } =
    props;
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={img} alt="" />
        <h1 className="singlePostTitle">
          {postTitle}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {author}
              </Link>
            </b>
          </span>
          <span>{postTime}</span>
        </div>
        <p className="singlePostDesc">
          {singlePostDesc1}
          <br />
          <br />
          {singlePostDesc2}
        </p>
      </div>
    </div>
  );
}
