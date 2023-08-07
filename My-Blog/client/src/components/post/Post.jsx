import './post.css';
import { Link } from "react-router-dom";

function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (

    <div className="post">
    {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
    <div className="postInfo">
      <div className="postCats">
        {post.categories.map((c) => (
          <span className="postCat">{c.name}</span>
        ))}
      </div>
      <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
      </Link>
      <hr />
      <span className="postDate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
    <p className="postDesc">{post.desc}</p>
  </div>
    // <div className="post">
    //  <img className="postImg" src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    //     <div className="postInfo">
    //       <div className="postCats">
    //         <span className="postCat">Music</span>
    //         <span className="postCat">Life</span>
    //       </div>
    //     <span className="postTitle">{post.title}</span>
    //       <hr />
    //       <span className="postDate">
    //       {new Date(post.createdAt).toDateString()}
    //     </span>
    //     </div>
    //     <p className="postDesc">{post.desc}</p>
    // </div>
  )
}

export default Post;