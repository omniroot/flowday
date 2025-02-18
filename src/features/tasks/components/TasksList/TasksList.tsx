import { TaskItem } from "@features/tasks/components/TaskItem/TaskItem.tsx";
import { useTasks } from "@features/tasks/hooks/useTasks.tsx";
import { FC } from "react";
import styles from "./TasksList.module.css";

const getDaysInCurrentMonth = () => {
	const currentDate = new Date(); // Получаем текущий год и месяц

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth(); // Месяцы начинаются с 0 (январь) до 11 (декабрь)// Создаем новую дату, установив день на 0, чтобы получить последний день предыдущего месяца

	const lastDayOfMonth = new Date(year, month + 1, 0); // Получаем количество дней в месяце

	return lastDayOfMonth.getDate();
};

const isBetweenDates = (date: number, start: number, end: number) => {
	return date >= start && date <= end;
};

interface ITasksListProps {
	selectedDay: number;
}
export const TasksList: FC<ITasksListProps> = ({ selectedDay }) => {
	const { tasks } = useTasks();

	if (!tasks) return null;
	return (
		<div className={styles.tasks_list}>
			{tasks
				?.filter((task) => {
					if (
						isBetweenDates(
							selectedDay,
							Number(task.dateStart.split(".")[0]),
							Number(task.dateEnd.split(".")[0]),
						)
					) {
						return task;
					}
				})
				.map((task) => {
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
