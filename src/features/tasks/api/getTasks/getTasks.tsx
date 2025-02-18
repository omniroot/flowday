import { api } from "@/shared/api/api.ts";
import { ITask } from "@features/tasks/types/tasks.types.ts";
import { createQuery } from "react-query-kit";

const getTasks = () => {
	return api.get<ITask[]>("tasks");
};

export const useGetTasks = createQuery<ITask[], unknown>({
	queryKey: ["getTasks"],
	fetcher: async () => {
		const response = await getTasks();
		return response.data;
	},
});
