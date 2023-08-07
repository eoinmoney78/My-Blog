import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
function Settings() {


    return (
        <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsTitleUpdate">Update Your Account</span>
              <span className="settingsTitleDelete">Delete Account</span>
            </div>
            <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img
                  src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  className="settingsPPInput"
                />
              </div>
              <label>Username</label>
              <input type="text" placeholder="Safak" name="name" />
              <label>Email</label>
              <input type="email" placeholder="eoinmoney@dink.com" name="email" />
              <label>Password</label>
              <input type="password" placeholder="Password" name="password" />
              <button className="settingsSubmitButton" type="submit">
                Update
              </button>
            </form>
          </div>
          <Sidebar />
        </div>
//   return (
//     <div className="settings">
//         <div className="settingsWrapper">
//             <div className="settingsTitle">
//                 <span className="settingsUpdateTitle">Update Your Account</span>
//                 <span className="settingsDeleteTitle">Delete Account</span>
    
//             </div>
//             <form className="settingsForm">
//                 <label>Profile Picture</label>
//                 <div className="settingsPP">
//                     <img src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                     <label htmlFor="fileInput">
//                     <i className="settingsPPIcon fa-solid fa-user"></i>
//                     </label>
//                     <input type="file" id="fileInput" style={{display: "none"}}/>
//                 </div>
//             </form>
//       <Sidebar/>
//         </div>
//         </div>
  )
}

export default Settings;