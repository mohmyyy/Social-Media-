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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const auth = useSelector((state) => state.auth);
  const name = auth.name ? auth.name : auth.email;
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <Link to={`/myprofile/${name}`}>
            <div className="user">
              <img src={auth.image} alt="" />
              <span>{name}</span>
            </div>
          </Link>
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
