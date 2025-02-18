import { MoreIcon } from "@/shared/assets/icons/MoreIcon.tsx";
import { Badge } from "@components/ui/Badge/Badge.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { ITask } from "@features/tasks/types/tasks.types.ts";
import { Button } from "@ui/Button/Button.tsx";
import { FC, useState } from "react";
import styles from "./TaskItem.module.css";
import { useUpdateTask } from "@features/tasks/api/updateTask/updateTask.tsx";
import { Checkbox } from "@ui/Checkbox/Checkbox.tsx";
import { useProjects } from "@features/projects/hooks/useProjects.tsx";

interface ITaskItemProps {
	task: ITask;
}

export const TaskItem: FC<ITaskItemProps> = ({ task }) => {
	const { getProject } = useProjects();
	const { mutate: updateTask } = useUpdateTask();
	const [checked, setChecked] = useState(task.completed);
	const project = getProject(task.project);

	const onCheckboxChange = () => {
		const nextState = !checked;
		setChecked(nextState);
		updateTask({ id: task.id, completed: nextState });
	};

	return (
		<div className={styles.task_item}>
			<Checkbox checked={checked} onChange={onCheckboxChange} />
			<div className={styles.info}>
				<Typography className={styles.title} size="medium" weight="title">
					{task.title}
				</Typography>
				<Typography className={styles.description} color="subtext2">
					{task.description}
				</Typography>
			</div>
			<div className={styles.right}>
				<Badge className={styles.project_badge} style={{ backgroundColor: project?.color }}>
					{project?.title}
				</Badge>
				<Button variant="ghost">
					<MoreIcon />
				</Button>
			</div>
		</div>
	);
};
