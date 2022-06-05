import { data } from "../DummyData";
import ProjectCard from "../src/components/ProjectCard";
const index = () => {
  console.log(data);
  return (
    <div>
      <h1>Sarossilli</h1>
      <div className="container projects-list">
        <div className="row">
          {data.map(function (p) {
            return <ProjectCard project={p}></ProjectCard>;
          })}
        </div>
      </div>
    </div>
  );
};
export default index;
