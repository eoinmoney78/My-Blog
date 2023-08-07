import React from 'react';
import { Link } from "react-router-dom";
import './topbar.css';

const TopBar = () => {
  const user = true;
  
  // Icons list for easy modifications in the future
  const icons = ['facebook', 'instagram', 'pinterest', 'twitter'];
  
  return (
    <div className="top">
      {/* Social Media Icons */}
      <div className="topLeft">
        {icons.map(icon => (
          <i className={`topIcon fab fa-${icon}-square`} key={icon}></i>
          ))}
      </div>

      {/* Navigation Links */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>

      {/* User Profile / Auth Links */}
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="User"
              />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;

// import { Link } from "react-router-dom";
// import './topbar.css';
// const TopBar = () => {
//   const user = true;
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIcon fab fa-facebook-square"></i>
//         <i className="topIcon fab fa-instagram-square"></i>
//         <i className="topIcon fab fa-pinterest-square"></i>
//         <i className="topIcon fab fa-twitter-square"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
//           <li className="topListItem"><Link className="link" to="/contact"> CONTACT</Link></li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           {user && <li className="topListItem">LOGOUT</li>}
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <Link className="link" to="/settings">
//             <img
//               className="topImg"
//               src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//             />
//           </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   )
// };

// export default TopBar;