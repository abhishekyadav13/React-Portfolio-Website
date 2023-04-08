import { Container,Row,Col,Tab,Nav } from "react-bootstrap"
import {ProjectCard} from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
// import TrackVisibility from "react-on-screen";
// import 'animate.css'
// import {isVisible} from "@testing-library/user-event/dist/utils";



export const Projects=()=>{

    //on hovering the image the image shows title and desciption
    const projects=[
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ]

    return(
      <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                {/* <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}> */}
                <h2>Projects</h2>
                <p>This is the project section</p>
                {/* </div>}
                </TrackVisibility> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* Nav varient,classname,id se tab side by side me arrange kiya gaya hai */}
                    <Nav varient="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item> 
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item> 
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item> 
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
            
                    <Tab.Content>
                        {/* Tab.Pane is a set of layered pages where only one page is displayed at a time */}
                        <Tab.Pane eventKey="first">
                            {/* Row ko lagane se image side by side me aate hai jab tak row size full na ho jaye */}
                            <Row>
                                {
                                    // map() creates a new array from calling a function for every array element.
                                    // map() does not change the original array.
                                    projects.map((project,index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>Lorem Ispum</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>Lorem Ispum</p>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
}