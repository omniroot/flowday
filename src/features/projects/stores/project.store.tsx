import { useGetProjects } from "@features/projects/api/getProjects/getProjects.api.ts";

// const projectsStore = atom<IProject[]>([]);

export const useProjects = () => {
	const { data: projects } = useGetProjects();
	// const [projects, setProjects] = useAtom(projectsStore);

	const getProject = (id: number) => {
		return projects?.filter((project) => project.id === id)[0];
	};

	console.log({ projects });

	return { projects, getProject };
};
