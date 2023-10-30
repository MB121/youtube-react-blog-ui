import Post from "../post/Post";
import { contentArr } from "../../components/postContent/postContent";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      {contentArr?.map((post) => (
        <Post
          img={post.img}
          id={post.id}
          tag1={post.tag1}
          tag2={post.tag2}
          postTitle={post.postTitle}
          postTime={post.postTime}
          subDesc={post.subDesc}
        />
      ))}
    </div>
  );
}
