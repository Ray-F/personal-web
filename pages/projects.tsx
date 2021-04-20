import Layout from "../components/Layout";
import ProjectContent from "../components/ProjectContent";

import attendanceImg1 from "assets/projects/pyf-attendance-1.png";
import attendanceImg2 from "assets/projects/pyf-attendance-2.png";
import attendanceImg3 from "assets/projects/pyf-attendance-3.png";

import aspaImg1 from 'assets/projects/aspa-1.jpg';
import aspaImg2 from 'assets/projects/aspa-2.jpg';
import aspaImg3 from 'assets/projects/aspa-3.jpg';

import spmediaImg1 from 'assets/projects/spmedia-1.jpg';
import spmediaImg2 from 'assets/projects/spmedia-2.jpg';



import styled from "styled-components";

const Img = styled.img`
  width: 600px;
  max-width: 120%;
  max-height: 400px;
`;

const Spacer = styled.div`
  height: 100px;
`

function Projects() {
  return (
    <Layout title={"My Projects"}>
      <Spacer />
      <ProjectContent
        style={{ backgroundColor: "rgb(249,249,249)" }}
        title={'Attendance & Capacity Monitor'}
        timeline={'2021'}
        description={`A tool that can be used to monitor and track attendance information beyond a simple 
                      excel spreadsheet. Also useful for generating insights into membership base capacity and well-being 
                      through a traffic light attendance tracking system.
                      <br /><br />
                      Built with: React, Material UI, Express, Mongo Atlas, react-vis
                      `}
        link={"rocket.spprax.co.nz"}
        type={"stuff"}
        client={`Hobby project for a charitable trust for which I am a volunteer board member
                      (<a href='https://www.pyf.org.nz>'>pyf.org.nz</a>)`}
      >
        <Img src={attendanceImg2} alt={"attendance app image"} />
        <Img src={attendanceImg1} alt={"attendance app image"} />
        <Img src={attendanceImg3} alt={"attendance app image"} />
      </ProjectContent>

      <ProjectContent
        style={{ color: 'white', backgroundColor: "rgb(51,51,51)" }}
        title={'Spprax Media Display Website'}
        timeline={'2019'}
        description={
          `A custom-built display website used to drive online traffic conversions. Uses EmailJS as
           a serverless lambda to send emails from contact form, and advanced google analytics to generate site performance
           insights.
     
                      <br /><br />
                      Built with: React, EmailJS, Google Analytics
                      `}
        link={"rocket.spprax.co.nz"}
        type={"stuff"}
        client={`Personal project for my freelance photography and video production business (<a href='https://spprax.co.nz'>spprax.co.nz</a>)`}
      >
        <Img src={spmediaImg1} alt={"spprax media image"} />
        <Img src={spmediaImg2} alt={"spprax media image"} />

      </ProjectContent>

      <ProjectContent
        title={'WDCC Pool Association Event Registration'}
        timeline={'2020 – 2021'}
        description={
          `An integrated event registration system that brings Google Sheets, Stripe online payments and typeform like
           user experience to a university pool club. Increases processing efficiencies to reduce administration time
           and increase pool time.
                      <br /><br />
                      Built with: PHP, CodeIgniter 3, Google API, Stripe API
                      `}
        link={"rocket.spprax.co.nz"}
        type={"stuff"}
        client={`Lead a project team of 8 developers as project manager (<a href='https://aspa.wdcc.co.nz'>aspa.wdcc.co.nz</a>)`}
      >
        <Img src={aspaImg2} alt={"aspa app image"} />
        <Img src={aspaImg1} alt={"aspa app image"} />
        <Img src={aspaImg3} alt={"aspa app image"} />

      </ProjectContent>
    </Layout>
  );
}

export default Projects;
