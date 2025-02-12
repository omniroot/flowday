import { useGetTasks } from "@features/tasks/api/getTasks/getTasks.tsx";
import { TaskItem } from "@features/tasks/components/TaskItem/TaskItem.tsx";
import { FC, useEffect, useState } from "react";
import styles from "./TasksList.module.css";

interface ITasksListProps {}
export const TasksList: FC<ITasksListProps> = () => {
	const { data } = useGetTasks();
	// const client = useQueryClient();
	// const updateList = () => {
	// 	client.refetchQueries({ queryKey: useGetTasks.getKey() });
	// };

	// const { mutate } = useAddTask({ onSuccess: updateList });
	const [tasks, setTasks] = useState(data);

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
			{/* <Button onClick={() => mutate({ completed: false, title: `test ${crypto.randomUUID()}` })}>
				Add test task
			</Button> */}
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
