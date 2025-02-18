import { api } from "@/shared/api/api.ts";
import { IProject } from "@features/projects/types/project.types.ts";
import { createMutation } from "react-query-kit";

export type ICreateProject = Omit<IProject, "id">;

const createProject = (project: ICreateProject) => {
	return api.post<IProject>(`projects`, { id: 0, ...project });
};

export const useCreateProject = createMutation<IProject, ICreateProject>({
	mutationKey: ["createProject"],
	mutationFn: async (project) => {
		const response = await createProject(project);
		return response.data;
	},
});
