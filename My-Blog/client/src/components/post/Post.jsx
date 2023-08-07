import './post.css';

function Post() {
  return (
    <div className="post">
     <img className="postImg" src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
          <hr />
          <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod laboriosam ut accusamus illo qui quam omnis. Tempora ex possimus, ipsa eveniet quam id officia quisquam vitae ipsam doloribus animi, voluptates quaerat repellat quo quae mollitia dolores cumque totam placeat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod laboriosam ut accusamus illo qui quam omnis. Tempora ex possimus, ipsa eveniet quam id officia quisquam vitae ipsam doloribus animi, voluptates quaerat repellat quo quae mollitia dolores cumque totam placeat?
        </p>
    </div>
  )
}

export default Post;