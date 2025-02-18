import { api } from "@/shared/api/api.ts";
import { ITask, IUpdateTask } from "@features/tasks/types/tasks.types.ts";
import { createMutation } from "react-query-kit";

const updateTask = ({ id, ...rest }: IUpdateTask) => {
	return api.patch<ITask>(`tasks/${id}`, rest);
};

export const useUpdateTask = createMutation<ITask, IUpdateTask>({
	mutationKey: ["updateTask"],
	mutationFn: async (task) => {
		const response = await updateTask(task);
		return response.data;
	},
});
