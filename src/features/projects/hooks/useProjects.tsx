import { client } from "@/shared/api/query-client.tsx";
import { useCreateProject } from "@features/projects/api/createProject/createProject.api.ts";
import { useGetProjects } from "@features/projects/api/getProjects/getProjects.api.ts";

export const useProjects = () => {
	const refetchProjects = () => {
		client.refetchQueries({ queryKey: useGetProjects.getKey() });
	};

	const { data: projects, isLoading } = useGetProjects({});
	const { mutate: createProject } = useCreateProject({ onSuccess: refetchProjects });

	const getProject = (id: number) => {
		return projects?.filter((project) => project.id === id)[0];
	};

	return { projects, getProject, createProject, refetchProjects, isLoading };
};
