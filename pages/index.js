import { data } from "../DummyData";
import ProjectCardList from "../src/components/ProjectCardList";
import Navbar from "../src/components/Navbar";

const index = () => {
  return (
    <div>
      <Navbar/>
      <ProjectCardList projectList={data}/>
    </div>
  );
};
export default index;
