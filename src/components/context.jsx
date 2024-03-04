import { createContext, useContext, useState } from 'react';
const ProjectContext = createContext();

export const useJobContext = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);

  return (
    <ProjectContext.Provider value={{ project: project }}>
      {children}
    </ProjectContext.Provider>
  );
};