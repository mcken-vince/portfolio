import { GithubLink } from "./Links/GithubLink";

export const Project = ({ project }: { project: any }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-3 rounded-xl gap-1">
      <h2 className="text-xl">{project?.title || "title"}</h2>

      {project.note && <p className="text-xs">({project.note})</p>}
      <p className="text-sm">{project.description || "description"}</p>

      <div className="flex justify-between mt-auto">
        <div className="flex flex-wrap gap-1 mt-1">
          {project.techStack?.map((skill: string) => (
            <SkillTag
              key={`project-${project?.title}-skill-${skill}`}
              skillName={skill}
            />
          ))}
        </div>
        <div className="mt-auto">
          <GithubLink link={project.github} />
        </div>
      </div>
    </div>
  );
};

const SkillTag = ({ skillName }: { skillName: string }) => {
  return (
    <span className="rounded-full border-2 border-blue-200 bg-blue-100 mr-1.5 px-1.5 py-.5 text-sm">
      {skillName}
    </span>
  );
};
