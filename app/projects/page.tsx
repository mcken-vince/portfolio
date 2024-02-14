import { Project } from "@components";
import { myProjects } from "@data/projects";

function Projects() {
  return (
    <div className="max-w-2xl m-auto flex flex-col">
      <h1 className="text-3xl font-semibold m-auto mb-5">My Projects</h1>
      <div className="grid sm:grid-cols-2 gap-5">
        {myProjects.map((project, idx) => (
          <Project key={`project-${idx}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
