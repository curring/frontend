import './Project.css';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_MOCK } from '../../mocks/projects-mock';

function Project() {
  
  const { id } = useParams();
  const thisProject = PROJECTS_MOCK.filter( 
    (project) => project.id.toString() === id )
  

  return (
    <div className='project-card'>
      <div className='project-header'>
        <h1>{thisProject[0].title}</h1>
        <p>{thisProject[0].shortDescription}</p>
        <Link className='button-link' to='/projects'>
          Volver a Proyectos
        </Link>
      </div>
    </div>
  )
}

export default Project