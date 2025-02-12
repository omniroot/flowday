import { TrashIcon } from "@/shared/assets/icons/TrashIcon.tsx";
import { useDeleteProject } from "@features/projects/api/deleteProject/deleteProject.api.ts";
import { useGetProjects } from "@features/projects/api/getProjects/getProjects.api.ts";
import { ProjectUpdateBottomSheet } from "@features/projects/components/ProjectUpdateBottomSheet/ProjectUpdateBottomSheet.tsx";
import { IProject } from "@features/projects/types/project.types.ts";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@ui/Button/Button.tsx";
import { Dialog } from "@ui/Dialog/Dialog.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { FC, useState } from "react";
import styles from "./ProjectItem.module.css";
import { ColorPreview } from "@features/projects/components/ColorPreview/ColorPreview.tsx";

interface IProjectItemProps {
	project: IProject;
}

export const ProjectItem: FC<IProjectItemProps> = ({ project }) => {
	const client = useQueryClient();
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

	const onSuccess = () => {
		client.refetchQueries({ queryKey: useGetProjects.getKey() });
	};
	const { mutateAsync: deleteProject } = useDeleteProject({ onSuccess });

	return (
		<>
			<div className={styles.project_item}>
				<div className={styles.color_preview} style={{ backgroundColor: project.color }} />
				<ColorPreview color={project.color} />
				<Typography size="medium">{project.title}</Typography>

				<div className={styles.actions}>
					<Button
						variant="ghost"
						className={styles.delete_button}
						onClick={() => setIsDeleteDialogOpen(true)}
					>
						<TrashIcon width={20} />
					</Button>
					<Button
						variant="ghost"
						className={styles.edit_button}
						onClick={() => setIsBottomSheetOpen(true)}
					>
						Edit
					</Button>
				</div>
			</div>

			{/* Update project */}
			<ProjectUpdateBottomSheet
				project={project}
				isOpen={isBottomSheetOpen}
				onOutsideClick={() => setIsBottomSheetOpen(false)}
			/>

			{/* Delete project */}
			<Dialog
				isShow={isDeleteDialogOpen}
				title="Delete project"
				description={`Are you sure you want to delete "${project.title}" project?`}
				onCancel={() => setIsDeleteDialogOpen(false)}
				onSubmit={() => deleteProject({ id: project.id })}
				submitText="Delete"
			/>
		</>
	);
};
