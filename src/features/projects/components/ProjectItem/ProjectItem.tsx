import { TrashIcon } from "@/shared/assets/icons/TrashIcon.tsx";
import { ColorPreview } from "@features/projects/components/ColorPreview/ColorPreview.tsx";
import { ProjectUpdateBottomSheet } from "@features/projects/components/ProjectUpdateBottomSheet/ProjectUpdateBottomSheet.tsx";
import { useProjects } from "@features/projects/hooks/useProjects.tsx";
import { IProject } from "@features/projects/types/project.types.ts";
import { Button } from "@ui/Button/Button.tsx";
import { Dialog } from "@ui/Dialog/Dialog.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { FC, useState } from "react";
import styles from "./ProjectItem.module.css";

interface IProjectItemProps {
	project: IProject;
}

export const ProjectItem: FC<IProjectItemProps> = ({ project }) => {
	const { deleteProject } = useProjects();
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

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
