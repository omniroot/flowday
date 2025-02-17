import { CreateProject } from "@features/projects/components/CreateProject/CreateProject.tsx";
import { ProjectsList } from "@features/projects/components/ProjectsList/ProjectsList.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useEffect } from "react";
export const ProjectsPage = () => {
	const { setTitle } = useHeader();

	useEffect(() => {
		setTitle("Projects");
	}, [setTitle]);

	return (
		<>
			<CreateProject />
			<ProjectsList />
		</>
	);
};
