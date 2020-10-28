import React from "react";
//import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./AboutMe.css";

//import Image from "react-bootstrap/Image";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3"> About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src="img/profile.png"
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                {/* description  */}
                Hi there! I am <strong>&nbsp;Yonatan Uzan</strong>
                <br />A passionate programmer and a Coach, born and brought up
                in India. I am a Full Stack Web Developer with React.js, Redux,
                Express.js, Node.js, and PostgreSQL as my tech stack.
                <br />
                In 2019, I successfully completed my Engineering with
                specialization in 'Electronics and Telecommunication'.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />
                Along with that, I also help people as a COACH on their journey
                of becoming a professional programmer.
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br /> <br />
              </Row>
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  {/* Links (buttons) */}
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  {/* <div>
                    <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div> */}
                  <div>
                    <a
                      href="https://github.com/yoniuzan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/yonatan-uzan-6a880b175/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutMe;

// const About = styled.div`
//   background-color: transparent;
//   font-size: 1.1em;
// `;
// const Profile = styled.img`
//   max-width: 18em;
//   justify-content: end;
// `;

/*
.about {
  background-color: transparent;
  font-size: 1.1em;
}

.profile {
  max-width: 18em;
}

.my-details {
  background-color: rgba(255, 255, 255, 0.747);
}
*/
