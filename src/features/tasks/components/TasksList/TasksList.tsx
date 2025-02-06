import { TrashIcon } from "@/shared/assets/icons/TrashIcon.tsx";
import { debounce } from "@/shared/utils/debounse.ts";
import { Switch } from "@components/ui/Switch/Switch.tsx";
import { useDeleteTask } from "@features/tasks/api/deleteTasks/deleteTasks.tsx";
import { ITask, useGetTasks } from "@features/tasks/api/getTasks/getTasks.tsx";
import { useUpdateTask } from "@features/tasks/api/updateTask/updateTask.tsx";
import { useUpdateTasks } from "@features/tasks/api/updateTasks/updateTasks.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { Reorder } from "motion/react";
import { FC, useEffect, useState } from "react";
import styles from "./TasksList.module.css";
import { Button } from "@components/ui/Button/Button.tsx";
import { useAddTask } from "@features/tasks/api/addTask/addTask.tsx";
import { TaskItem } from "@features/tasks/components/TaskItem/TaskItem.tsx";

interface ITasksListProps {}
export const TasksList: FC<ITasksListProps> = () => {
	const { data } = useGetTasks();
	const client = useQueryClient();
	const updateList = () => {
		client.refetchQueries({ queryKey: useGetTasks.getKey() });
	};

	const { mutate } = useAddTask({ onSuccess: updateList });
	const { mutate: updateTask } = useUpdateTask({ onSuccess: updateList });
	const { mutate: deleteTask } = useDeleteTask({ onSuccess: updateList });
	const [tasks, setTasks] = useState(data);

	const onSwitchChange = (id: number, newState: boolean) => {
		updateTask({ id, completed: newState });
	};

	// const onReorder = (newOrder: ITask[]) => {
	// 	const debouncedUpdateTask = debounce(() => {
	// 		if (newOrder) {
	// 			updateTasks(newOrder);
	// 		}
	// 	}, 800);

	// 	setTasks(newOrder);
	// 	debouncedUpdateTask();
	// };
	console.log({ data });

	useEffect(() => {
		if (data) setTasks(data);
	}, [data]);

	if (!tasks) return null;
	return (
		<div className={styles.tasks_list}>
			<Button onClick={() => mutate({ completed: false, title: `test ${crypto.randomUUID()}` })}>
				Add test task
			</Button>
			{tasks?.map((task) => {
				return (
					<TaskItem
						key={task.id}
						task={task}
						// onChange={(state) => onSwitchChange(task.id, state)}
						// rightSlot={<TrashIcon onClick={() => deleteTask({ id: task.id })} />}
					/>
				);
			})}
		</div>
	);
};
