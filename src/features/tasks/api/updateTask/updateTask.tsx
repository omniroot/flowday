import { api } from "@/shared/api/api.ts";
import { ITask } from "@features/tasks/types/tasks.types.ts";
import { createMutation } from "react-query-kit";

type IUpdateTask = Partial<ITask>;

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
