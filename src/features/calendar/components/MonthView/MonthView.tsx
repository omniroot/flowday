import { useProjects } from "@features/projects/stores/project.store.tsx";
import { useGetTasks } from "@features/tasks/api/getTasks/getTasks.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { useState } from "react";
import styles from "./MonthView.module.css";

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

export const MonthView = () => {
	const [daysInMonth] = useState(getDaysInCurrentMonth());
	const [currentDay] = useState(new Date().getDate());
	const [selectDay, setSelectDay] = useState(currentDay);
	const { getPorject } = useProjects();
	const [isOpen, setIsOpen] = useState(false);
	const { data: tasks } = useGetTasks();
	const days = Array.from({ length: daysInMonth }).map((_, index) => index + 1);
	// useEffect(() => {
	// 	tasks?.map((task) => {
	// 		const date = JSON.parse(task.date);
	// 		if (date.start.split(".")[0] === String(currentDay)) {
	// 			setCurrentTasks([task.title]);
	// 		}
	// 	});
	// }, [tasks, currentDay]);

	return (
		<div className={styles.month_view}>
			<div className={styles.days} style={{ height: isOpen ? "250px" : "400px" }}>
				{days.map((day) => (
					<div
						className={styles.day}
						onClick={() => setSelectDay(Number(day))}
						style={{ height: isOpen ? "50px" : "80px" }}
					>
						<Typography
							className={styles.number}
							data-current={day === currentDay}
							data-selected={day === selectDay}
						>
							{day}
						</Typography>
						<div className={styles.tasks}>
							{tasks
								?.filter((task) => {
									if (
										isBetweenDates(
											day,
											Number(task.dateStart.split(".")[0]),
											Number(task.dateEnd.split(".")[0]),
										)
									) {
										return task;
									}
								})
								.map((task) => {
									return (
										<div
											className={styles.task}
											style={{ backgroundColor: getPorject(task.project)?.color || "red" }}
										>
											{task.title}
										</div>
									);
								})}
						</div>

						{/* {day === currentDay && (
						)} */}
					</div>
				))}
			</div>
			<button onClick={() => setIsOpen((prev) => !prev)}>set {String(isOpen)}</button>
			<div>{currentDay}</div>
			<div className={styles.tasks}>
				{tasks
					?.filter((task) => {
						if (
							isBetweenDates(
								selectDay,
								Number(task.dateStart.split(".")[0]),
								Number(task.dateEnd.split(".")[0]),
							)
						) {
							return task;
						}
					})
					.map((task) => {
						return <div className={styles.task}>{task.title}</div>;
					})}
			</div>
		</div>
	);
};
