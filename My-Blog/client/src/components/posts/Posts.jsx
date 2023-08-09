import Post from "../post/Post";
import "./posts.css";
import PropTypes from 'prop-types';

function Posts({ posts }) {
  return (
    <div className="posts">
      {Array.isArray(posts) && posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

Posts.defaultProps = {
  posts: []
};

export default Posts;
