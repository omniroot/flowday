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
			<ProjectsList />
		</>
	);
};
