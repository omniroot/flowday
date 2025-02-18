import { ProjectItem } from "@features/projects/components/ProjectItem/ProjectItem.tsx";
import styles from "./ProjectsList.module.css";
import { useProjects } from "@features/projects/hooks/useProjects.tsx";

export const ProjectsList = () => {
	const { projects } = useProjects();

	return (
		<div className={styles.projects_list}>
			{projects?.map((project) => {
				return <ProjectItem project={project} />;
			})}
		</div>
	);
};
