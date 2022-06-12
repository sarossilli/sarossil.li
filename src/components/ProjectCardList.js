import ProjectCard from "./ProjectCard";

import { API } from "aws-amplify";

import { listProjects } from "../graphql/queries";
import { useState } from "react";

function ProjectCardList() {
  const [projectList, setProjectList] = useState({});
  const [isLoaded, setLoadedState] = useState(false);

  API.graphql({ query: listProjects }).then(function (result) {
    setProjectList(result.data.listProjects.items);
    setLoadedState(true);
  });

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
