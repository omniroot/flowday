import { api } from "@/shared/api/api.ts";
import { IGetTask, ITask } from "@features/tasks/types/tasks.types.ts";
import { createQuery } from "react-query-kit";

const getTask = ({ id }: IGetTask) => {
	return api.get<ITask>(`tasks/${id}`);
};

export const useGetTask = createQuery<ITask, IGetTask>({
	queryKey: ["getTasks"],
	fetcher: async ({ id }) => {
		const response = await getTask({ id });
		return response.data;
	},
});
