import { IProject } from "@features/projects/types/project.types.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Input } from "@ui/Input/Input.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { FC, useState } from "react";
import styles from "./ProjectUpdateBottomSheet.module.css";
import { ColorPreview } from "@features/projects/components/ColorPreview/ColorPreview.tsx";
import { useUpdateProject } from "@features/projects/api/updateProject/updateProject.api.ts";
import { useQueryClient } from "@tanstack/react-query";
import { useGetProjects } from "@features/projects/api/getProjects/getProjects.api.ts";

interface IProps {
	project: IProject;
	isOpen: boolean;
	onOutsideClick: () => void;
}

export const ProjectUpdateBottomSheet: FC<IProps> = ({ project, isOpen, onOutsideClick }) => {
	const client = useQueryClient();
	const { mutate: updateProject } = useUpdateProject({
		onSuccess: () => {
			client.refetchQueries({ queryKey: useGetProjects.getKey() });
		},
	});

	const [newTitle, setNewTitle] = useState(project.title);
	const [newColor, setNewColor] = useState(project.color);

	const onResetButtonClick = () => {
		setNewTitle(project.title);
		setNewColor(project.color);
	};

	const onSaveButtonClick = () => {
		updateProject({ id: project.id, title: newTitle, color: newColor });
		onOutsideClick();
	};

	return (
		<BottomSheet title="Edit project" isShow={isOpen} onOutsideClick={onOutsideClick}>
			<div className={styles.content}>
				<div className={styles.line}>
					<Typography>Name: </Typography>
					<Input value={newTitle} onChange={(newValue) => setNewTitle(newValue)} />
				</div>
				<div className={styles.line}>
					<Typography>Color: </Typography>
					<Input value={newColor} onChange={(newValue) => setNewColor(newValue)} />
					<ColorPreview color={newColor} />
				</div>
				<div className={styles.actions}>
					<Button className={styles.reset_button} onClick={onResetButtonClick}>
						Reset
					</Button>
					<Button className={styles.save_button} onClick={onSaveButtonClick}>
						Save
					</Button>
				</div>
			</div>
		</BottomSheet>
	);
};
