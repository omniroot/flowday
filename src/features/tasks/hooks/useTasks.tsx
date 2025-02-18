import { client } from "@/shared/api/query-client.tsx";
import { useCreateTask } from "@features/tasks/api/createTask/createTask.tsx";
import { useDeleteTask } from "@features/tasks/api/deleteTasks/deleteTasks.tsx";
import { useGetTasks } from "@features/tasks/api/getTasks/getTasks.tsx";
import { useUpdateTask } from "@features/tasks/api/updateTask/updateTask.tsx";

export const useTasks = () => {
	const refetchTasks = () => {
		client.refetchQueries({ queryKey: useGetTasks.getKey() });
	};
	const { data: tasks, isLoading } = useGetTasks();
	const { mutate: createTask } = useCreateTask({ onSuccess: refetchTasks });
	const { mutate: updateTask } = useUpdateTask({ onSuccess: refetchTasks });
	const { mutate: deleteTask } = useDeleteTask({ onSuccess: refetchTasks });

	return { tasks, isLoading, refetchTasks, createTask, deleteTask, updateTask };
};
