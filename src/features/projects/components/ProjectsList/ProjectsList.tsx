import { ProjectItem } from "@features/projects/components/ProjectItem/ProjectItem.tsx";
import { useProjects } from "@features/projects/stores/project.store.tsx";
import styles from "./ProjectsList.module.css";

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
