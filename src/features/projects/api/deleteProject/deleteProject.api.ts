import { api } from "@/shared/api/api.ts";
import { IDeleteProject, IProject } from "@features/projects/types/project.types.ts";
import { createMutation } from "react-query-kit";

const deleteProject = ({ id }: IDeleteProject) => {
	return api.delete<IProject>(`projects/${id}`);
};

export const useDeleteProject = createMutation<IProject, IDeleteProject>({
	mutationKey: ["deleteProject"],
	mutationFn: async ({ id }) => {
		const response = await deleteProject({ id });
		return response.data;
	},
});
