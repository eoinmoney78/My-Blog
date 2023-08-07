import "./sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img  src="https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus explicabo ipsam voluptate ex dolorum ab recusandae corporis dolore eligendi? Praesentium suscipit a deserunt doloribus reiciendis eaque tempora. Distinctio aspernatur ab unde labore sequi provident assumenda aperiam officia ex! Quo.</p>
     </div>
     <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>

     </div>
     <div className="sidebarItem">
     <span className="sidebarTitle">FOLLOW US</span>
     <div className="sidebarSocial">
        <i className='sidebarIcon fa-brands fa-facebook'></i> 
        <i className='sidebarIcon fa-brands fa-twitter'></i> 
        <i className='sidebarIcon fa-brands fa-pinterest'></i><i className='sidebarIcon fa-brands fa-square-instagram'></i>
     </div>

     </div>
    </div>
  )
}

export default Sidebar;