const ProjectCard = ({project}) => {
    
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
            <h3>{project.title}</h3>
            <p>{project.smallDesc}</p>
            <ul>
                {project.skills.map(function(skill){
                    return(<li>{skill}</li>);
                })}
            </ul>

            </div>

        </div>
    );

}

export default ProjectCard;