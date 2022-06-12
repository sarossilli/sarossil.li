function SkillList({ skills }) {
  return (
    <div className="card skills">
      <div className="card-header">Skills</div>
      <ul>
        {skills.map(function (skill) {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default SkillList;
