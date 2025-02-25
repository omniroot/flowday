import { api } from "@/shared/api/api.ts";
import { IProject, IUpdateProject } from "@features/projects/types/project.types.ts";
import { createMutation } from "react-query-kit";

const updateProject = ({ id, ...project }: IUpdateProject) => {
	return api.patch<IProject>(`projects/${id}`, project);
};

export const useUpdateProject = createMutation<IProject, IUpdateProject>({
	mutationKey: ["updateProject"],
	mutationFn: async (project) => {
		const response = await updateProject(project);
		return response.data;
	},
});
