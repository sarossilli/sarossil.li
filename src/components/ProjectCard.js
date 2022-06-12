import SkillList from "./SkillList";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <div className="project-info">
          <div className="d-flex justify-content-between mb-3">
            <h3 className="text-truncate w-200">{project.title}</h3>
          </div>
          <img
            src="https://raw.githubusercontent.com/Sarossilli/Musical-Joycons/master/readme/header.gif"
            className="project-img d-flex flex0row justify-content-center alighn-items-center h-200"
          ></img>
          <div>
            <p>{project.smallDesc}</p>
          </div>
        </div>
        <SkillList skills={project.skills} />
      </div>
    </div>
  );
};

export default ProjectCard;
