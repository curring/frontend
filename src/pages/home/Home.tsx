import { Header } from '../../components';
import Card from '../../components/card/Card';
import { PROJECTS_MOCK } from "../../mocks/projects-mock"
import './Home.css';

function Home() {

  const lastProjects = PROJECTS_MOCK.slice(0, 3);
  return (
    <div>
      <Header/>
      <div className='cards'>
        {

          lastProjects.map( (project) => {
              const { title, shortDescription, imgs, id } = project
                return <Card 
                key = { id }
                id = {id}
                title = { title }
                description = { shortDescription }
                img = { imgs[0] }
              />
          } )
        }
    
      </div>
    </div>
  )
}

export default Home