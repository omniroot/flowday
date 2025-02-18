import { useProjects } from "@features/projects/hooks/useProjects.tsx";
import { useCreateTask } from "@features/tasks/api/createTask/createTask.tsx";
import { useGetTasks } from "@features/tasks/api/getTasks/getTasks.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Input } from "@ui/Input/Input.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { FC, useState } from "react";
import styles from "./CreateTaskBottomSheet.module.css";

function getCurrentDate() {
	const date = new Date();
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
}

interface ICreateTaskBottomSheetProps {
	isOpen: boolean;
	onOutsideClick: () => void;
}
export const CreateTaskBottomSheet: FC<ICreateTaskBottomSheetProps> = ({
	isOpen,
	onOutsideClick,
}) => {
	const client = useQueryClient();
	const { projects, getProject } = useProjects();
	const { mutate: createTask } = useCreateTask({
		onSuccess: () => {
			client.refetchQueries({ queryKey: useGetTasks.getKey() });
			onOutsideClick();
		},
	});
	const [activeProject, setActiveProject] = useState<number | null>(0);
	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [newStartDate, setNewStartDate] = useState(getCurrentDate());
	const [newEndDate, setNewEndDate] = useState(getCurrentDate());

	const onCreateButtonClick = () => {
		createTask({
			title: newTitle,
			description: newDescription,
			project: Number(activeProject),
			dateStart: newStartDate,
			dateEnd: newEndDate,
			completed: false,
			difficult: "easy",
			priority: "low",
		});
	};

	if (!projects) return;

	return (
		<BottomSheet isShow={isOpen} onOutsideClick={onOutsideClick} title="Create task">
			<div className={styles.content}>
				<Input
					value={newTitle}
					placeholder="Title"
					onChange={(newValue) => setNewTitle(newValue)}
				/>
				<Input
					value={newDescription}
					placeholder="Description"
					onChange={(newValue) => setNewDescription(newValue)}
				/>
				{/* <div className={styles.line}>
					<Input
						value={newColor}
						onChange={(newValue) => setNewColor(newValue)}
						placeholder="Color"
					/>
					<ColorPreview color={newColor} />
				</div> */}
				<div className={styles.project_buttons}>
					{projects.map((project) => {
						return (
							<Button
								style={
									project.id === activeProject
										? { backgroundColor: "var(--color-ternary)" }
										: { backgroundColor: project.color }
								}
								onClick={() => setActiveProject(project.id)}
							>
								{project.title}
							</Button>
						);
					})}
				</div>
				<div className={styles.date_inputs}>
					<Typography>Start:</Typography>
					<Input value={newStartDate} onChange={(newValue) => setNewStartDate(newValue)} />
					<Typography>End:</Typography>
					<Input value={newEndDate} onChange={(newValue) => setNewEndDate(newValue)} />
				</div>
				<Button style={{ width: "100%" }} onClick={onCreateButtonClick}>
					Add
				</Button>
			</div>
		</BottomSheet>
	);
};
