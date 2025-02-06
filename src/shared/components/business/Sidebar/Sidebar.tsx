import { Typography } from "@components/ui/Typography/Typography.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { Link } from "@tanstack/react-router";
import { FC } from "react";
import styles from "./Sidebar.module.css";
import { Input } from "@components/ui/Input/Input.tsx";
import { TasksList } from "@features/tasks/components/TasksList/TasksList.tsx";
import { Button } from "@components/ui/Button/Button.tsx";

interface ISidebarProps {}
export const Sidebar: FC<ISidebarProps> = () => {
	const { title } = useHeader();
	return (
		<div className={styles.sidebar}>
			<div className={styles.header}>
				<Typography size="title" weight="title">
					{title}
				</Typography>
			</div>
			<div className={styles.add_task}>
				<Input placeholder="Add task" />
			</div>
			<div className={styles.tasks}>
				<TasksList />
			</div>
			<div className={styles.links}>
				<Button asLink variant="secondary">
					<Link to="/">home</Link>
				</Button>
				<Button asLink variant="secondary">
					<Link to="/">routine</Link>
				</Button>
				<Button asLink variant="secondary">
					<Link to="/">settings</Link>
				</Button>
			</div>
		</div>
	);
};
