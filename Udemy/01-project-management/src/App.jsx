import { useState } from 'react';
import noProjects from './assets/no-projects.png';
import NewProject from './components/NewProject';
import ProjectsSideBar from './components/ProjectsSideBar';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[]
  })
  function handleSelection(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }
  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newProject = {
       ...projectData,
       id:Math.random()
      }
      return {
        ...prevState,
        projects:[...prevState.projects,newProject],
        selectedProjectId:undefined
      }

    });
  }
 function  handleCancelAddProject(){
     setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:undefined
      }
    })
 }
  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject  onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onClick={handleSelection}/>
  }


  return (
    <>
   
       <main className='h-screen my-8 flex gap-8'>
       <ProjectsSideBar onClick ={handleSelection} projects={projectState.projects}/>
       {content}
        </main>

    </>
  );
}

export default App;
