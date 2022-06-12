import ProjectCard from "./ProjectCard";

function ProjectCardList({ projectList }) {
  return (
    <div className="container projects-list">
      <div className="row">
        {projectList.map(function (p) {
          return (<ProjectCard key={p.id} project={p}></ProjectCard>);
        })}
      </div>
    </div>
  );
}

export default ProjectCardList;
