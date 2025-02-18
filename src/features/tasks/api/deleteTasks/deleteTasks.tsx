import { api } from "@/shared/api/api.ts";
import { IDeleteTask, ITask } from "@features/tasks/types/tasks.types.ts";
import { createMutation } from "react-query-kit";

const deleteTask = ({ id }: IDeleteTask) => {
	return api.delete<ITask>(`tasks/${id}`);
};

export const useDeleteTask = createMutation<ITask, IDeleteTask>({
	mutationKey: ["getTasks"],
	mutationFn: async ({ id }) => {
		const response = await deleteTask({ id });
		return response.data;
	},
});
