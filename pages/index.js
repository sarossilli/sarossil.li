import ProjectCardList from "../src/components/ProjectCardList";
import Navbar from "../src/components/Navbar";

import Amplify, { Auth, API } from "aws-amplify";
import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);

const index = () => {
  return (
    <div>
      <Navbar />
      <ProjectCardList />
    </div>
  );
};
export default index;
