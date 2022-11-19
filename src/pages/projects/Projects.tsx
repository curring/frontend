import './Projects.css';
import Card from '../../components/card/Card';
import {  PROJECTS_MOCK  } from '../../mocks/projects-mock';

function Projects() {
  return (
    <div>
      <div className='projects-header'>
          <h1>The last Projects</h1>
      </div>
      <div className='projects-container'>
        {
          PROJECTS_MOCK.map( (project) => {
            return <Card
              id = {project.id}
              title = {project.title}
              description = {project.shortDescription}
              img = {project.imgs[0]}
              key = {project.id}
            />
          } ) 
        }
      </div>
    </div>
  )
}

export default Projects