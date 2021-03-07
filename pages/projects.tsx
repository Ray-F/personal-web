import Layout from "../components/Layout";
import Content from "../components/Content";
import ProjectContent from "../components/ProjectContent";

import attendanceImg1 from "assets/projects/pyf-attendance-1.png";
import attendanceImg2 from "assets/projects/pyf-attendance-2.png";
import attendanceImg3 from "assets/projects/pyf-attendance-3.png";
import styled from "styled-components";

const Img = styled.img`
  width: 600px;
  max-width: 100%;
`;

const Spacer = styled.div`
  height: 100px;
`

function Projects() {
  return (
    <Layout title={"Past Projects"}>
      <Spacer />
      <ProjectContent style={{ backgroundColor: "rgb(249,249,249)" }}
                      title={"Attendance Monitor"}
                      description={"Something cool"}
                      link={"rocket.spprax.co.nz"}
                      type={"stuff"}>
        <Img src={attendanceImg2} alt={"attendance app image"} />
        <Img src={attendanceImg1} alt={"attendance app image"} />
        <Img src={attendanceImg3} alt={"attendance app image"} />


      </ProjectContent>
    </Layout>
  );
}

export default Projects;