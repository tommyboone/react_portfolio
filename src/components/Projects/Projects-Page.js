import React from "react";
import ProjectList from "../../Project-List.json";
import "./Projects.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";

// const Projects = ProjectList.map(({ data }) => {
//   return (
//           <MDBCard wide cascade>
//             <MDBView cascade>
//               <MDBCardImage
//                 hover
//                 overlay="white-slight"
//                 className="card-img-top"
//                 src={data.img}
//                 alt="picture of project"
//               />
//             </MDBView>

//             <MDBCardBody cascade className="text-center">
//               <MDBCardTitle className="card-title">
//                 <strong>{data.title}</strong>
//               </MDBCardTitle>

//               <MDBCardText>{data.description}</MDBCardText>

//               <MDBCol md="12" className="d-flex justify-content-center">
//                 <MDBBtn gradient="blue" href={data.github}>
//                   Github
//                 </MDBBtn>
//                 <MDBBtn gradient="blue" href={data.website}>
//                   Website
//                 </MDBBtn>
//               </MDBCol>
//             </MDBCardBody>
//           </MDBCard>

//   );
// });

class ProjectCard extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    return ProjectList.map(({ data }) => {
      return (
        <MDBContainer fluid>

          <MDBRow>
              <MDBCol md="4" />
            <MDBCol md="4">
              <MDBCard wide cascade className="project-card"> 
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay="white-slight"
                    className="card-img-top"
                    src={data.img}
                    alt="picture of project"
                  />
                </MDBView>

                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle className="card-title ">
                    <strong>{data.title}</strong>
                  </MDBCardTitle>

                  <MDBCardText>{data.description}</MDBCardText>

                  <MDBCol md="12" className="d-flex justify-content-center">
                    <MDBBtn gradient="blue" href={data.github}>
                      Github
                    </MDBBtn>
                    <MDBBtn gradient="blue" href={data.website}>
                      Website
                    </MDBBtn>
                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    });
  }
}
export default ProjectCard;
