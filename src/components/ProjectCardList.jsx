import ProjectCard from "./ProjectCard";

import { useState } from "react";

function ProjectCardList() {
  const [projectList, setProjectList] = useState({});
  const [isLoaded, setLoadedState] = useState(false);
  
  if (isLoaded) {
    return (
      <div className="container projects-list">
        <div className="row">
          {projectList.map(function (p) {
            return <ProjectCard key={p.id} project={p}></ProjectCard>;
          })}
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default ProjectCardList;
