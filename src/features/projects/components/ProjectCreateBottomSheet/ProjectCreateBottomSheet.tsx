import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { FC, useEffect, useState } from "react";
import styles from "./ProjectCreateBottomSheet.module.css";
import { ColorPreview } from "@features/projects/components/ColorPreview/ColorPreview.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Input } from "@ui/Input/Input.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { useCreateProject } from "@features/projects/api/createProject/createProject.api.ts";
import { useGetProjects } from "@features/projects/api/getProjects/getProjects.api.ts";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
	isOpen: boolean;
	onOutsideClick: () => void;
}

export const ProjectCreateBottomSheet: FC<IProps> = ({ isOpen, onOutsideClick }) => {
	const client = useQueryClient();
	const { mutate: createProject } = useCreateProject({
		onSuccess: () => {
			client.refetchQueries({ queryKey: useGetProjects.getKey() });
			onOutsideClick();
		},
	});

	const [newTitle, setNewTitle] = useState("");
	const [newColor, setNewColor] = useState("");

	const onCreateButtonClick = () => {
		createProject({ title: newTitle, color: newColor });
	};

	return (
		<BottomSheet isShow={isOpen} onOutsideClick={onOutsideClick} title="Create project">
			<div className={styles.content}>
				<div className={styles.line}>
					<Typography>Name: </Typography>
					<Input
						placeholder="Project name"
						value={newTitle}
						onChange={(newValue) => setNewTitle(newValue)}
					/>
				</div>
				<div className={styles.line}>
					<Typography>Color: </Typography>
					<Input
						placeholder="Project color"
						value={newColor}
						onChange={(newValue) => setNewColor(newValue)}
					/>
					<ColorPreview color={newColor} />
				</div>
				<div className={styles.actions}>
					<Button className={styles.save_button} onClick={onCreateButtonClick}>
						Create
					</Button>
				</div>
			</div>
		</BottomSheet>
	);
};
