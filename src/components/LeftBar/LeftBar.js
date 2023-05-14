import "./LeftBar.scss";
import Friends from "../../components/asserts/friends.png";
import Groups from "../../components/asserts/group.png";
import Market from "../../components/asserts/marketplace.png";
import Watch from "../../components/asserts/watch.png";
import Memories from "../../components/asserts/memories.png";
import Events from "../../components/asserts/events.png";
import Gaming from "../../components/asserts/gaming.png";
import Gallery from "../../components/asserts/gallery.png";
import Videos from "../../components/asserts/videos.png";
import Message from "../../components/asserts/message.png";
import Tutorials from "../../components/asserts/tutorials.png";
import Courses from "../../components/asserts/courses.png";
import Fund from "../../components/asserts/fundraiser.png";
import { Group } from "@mui/icons-material";

const LeftBar = () => {

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              // src={currentUser.profilePic ? currentUser.profilePic : ''}
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            {/* <span> {currentUser.name ? currentUser.name : ''} </span> */}
            <span>Mohmy</span>
          </div>
          <div className="item">
            <img src={Friends} alt="friend" />
            <span> Friends </span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span> Groups </span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span> Market </span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span> Watch </span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span> Memories </span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcut</span>
          <div className="item">
            <img src={Events} alt="" />
            <span> Events </span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span> Gaming </span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span> Gallery </span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span> Videos </span>
          </div>
          <div className="item">
            <img src={Message} alt="" />
            <span> Message </span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span> Fund </span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span> Tutorials </span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span> Courses </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
