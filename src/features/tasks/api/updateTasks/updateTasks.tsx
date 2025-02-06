import { api } from "@/shared/api/api.ts";
import { createMutation } from "react-query-kit";

interface ITask {
	id: number;
	text: string;
	day: string;
	completed: boolean;
}

type IUpdateTask = ITask[];

const updateTasks = (tasks: IUpdateTask) => {
	return api.patch<ITask[]>(`tasks`, tasks);
};

export const useUpdateTasks = createMutation<ITask[], IUpdateTask>({
	mutationKey: ["updateTasks"],
	mutationFn: async (task) => {
		const response = await updateTasks(task);
		return response.data;
	},
});
