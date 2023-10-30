import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import SinglePost from "../../components/singlePost/SinglePost";
import { contentArr } from "../../components/postContent/postContent";
import "./single.css";

export default function Single() {
  const { id } = useParams();

  // Convert id to a number
  const postId = parseInt(id, 10);

  // Use Array.find() to get the post with the matching id
  const filteredPost = contentArr.filter((content) => content.id === postId);

  return (
    <div className="single">
      {filteredPost?.map((post) => (
        <SinglePost
          key={post.id}
          id={post.id}
          postTitle={post.postTitle}
          postTime={post.postTime}
          img={post.img}
          singlePostDesc1={post.singlePostDesc1}
          singlePostDesc2={post.singlePostDesc2}
          author={post.author}
        />
      ))}
      {/* <Sidebar /> */}
    </div>
  );
}
