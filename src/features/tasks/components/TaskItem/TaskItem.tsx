import { Badge } from "@components/ui/Badge/Badge.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { ITask } from "@features/tasks/types/tasks.types.ts";
import { FC } from "react";
import styles from "./TaskItem.module.css";

interface ITaskItemProps {
	task: ITask;
}

export const TaskItem: FC<ITaskItemProps> = ({ task }) => {
	return (
		<div className={styles.task_item}>
			<input type="checkbox" defaultChecked={task.completed} />
			<div className={styles.info}>
				<Typography className={styles.title} size="medium" weight="title">
					{task.title}
				</Typography>
				<Typography>{task.id}</Typography>
			</div>
			<div className={styles.right}>
				<Badge>health</Badge>
				{/* <Button variant="ghost"> */}
				{/* <TrashIcon /> */}
				{/* </Button> */}
			</div>
		</div>
	);
};
