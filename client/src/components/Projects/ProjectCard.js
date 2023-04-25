import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Project.scss';

export const ProjectCard = ({ title, description,projectUrl, isProjectLive, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      < div className="proj-imgbx">
        <img className="projectcard-img" src={imgUrl} alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description} </span>
          {isProjectLive && <Button variant="success" className="view-project">   <a href={projectUrl} > View Project</a></Button>}
          </div>
      </div>
    </Col>
  )
}
