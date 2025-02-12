import { api } from "@/shared/api/api.ts";
import { ITask } from "@features/tasks/types/tasks.types.ts";
import { createMutation } from "react-query-kit";

type IAddTask = Omit<ITask, "id">;

const addTask = (task: IAddTask) => {
	return api.post<ITask>("tasks", task);
};

export const useAddTask = createMutation<ITask, IAddTask>({
	mutationKey: ["addTask"],
	mutationFn: async (task) => {
		const response = await addTask(task);
		return response.data;
	},
});
