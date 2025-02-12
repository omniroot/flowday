import { api } from "@/shared/api/api.ts";
import { IProject } from "@features/projects/types/project.types.ts";
import { createQuery } from "react-query-kit";

const getProjects = () => {
	return api.get<IProject[]>("projects");
};

export const useGetProjects = createQuery({
	queryKey: ["getProjects"],
	fetcher: async () => {
		const response = await getProjects();
		return response.data;
	},
});
