import {data} from "../DummyData";
import ProjectCard from "../src/components/ProjectCard"
const index = () => {
    console.log(data)
    return(
        <div>
            <h1>Sarossilli</h1>
            {data.map(function(p){
                return (<ProjectCard project={p}></ProjectCard>);
            })}
        </div>
    );
}
export default index;