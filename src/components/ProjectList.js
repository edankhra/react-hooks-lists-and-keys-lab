import React from "react";
import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   console.log(projects);
//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list">{/* render ProjectItem components here */}
//       </div>
//     </div>
//   );
// }

// export default ProjectList;
const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          description={project.description}
          url={project.url}
          technologies={project.technologies} // Pass the technologies array as a prop
        />
      ))}
    </div>
  );
};

export default ProjectList;