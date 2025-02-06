import { api } from "@/shared/api/api.ts";
import { ITask } from "@features/tasks/types/tasks.types.ts";
import { createQuery } from "react-query-kit";

interface IGetTasks {}

const getTasks = () => {
	return api.get<ITask[]>("tasks");
};

export const useGetTasks = createQuery<ITask[], IGetTasks>({
	queryKey: ["getTasks"],
	fetcher: async () => {
		const response = await getTasks();
		return response.data;
	},
});
