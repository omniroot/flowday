import { api } from "@/shared/api/api.ts";
import { ICreateTask, ITask } from "@features/tasks/types/tasks.types.ts";
import { createMutation } from "react-query-kit";

const createTask = (task: ICreateTask) => {
	return api.post<ITask>("tasks", task);
};

export const useCreateTask = createMutation<ITask, ICreateTask>({
	mutationKey: ["addTask"],
	mutationFn: async (task) => {
		const response = await createTask(task);
		return response.data;
	},
});
