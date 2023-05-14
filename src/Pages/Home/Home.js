import Stories from "../../components/Stories/Stories";
import Posts from "../../components/Posts/Posts";

import "./Home.scss";
import AddPost from "../../components/AddPost/AddPost";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
