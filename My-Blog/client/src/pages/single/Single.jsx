import Sidebar from '../../components/sidebar/Sidebar'; 
import SinglePost from '../../components/singlePost/SinglePost'
import "./single.css";
function Single() {
  return (
    <div className="single">
      {/* Post */}
       <SinglePost/>
        <Sidebar/>
        </div>
  )
}

export default Single;