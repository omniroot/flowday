import { ProjectCreateBottomSheet } from "@features/projects/components/ProjectCreateBottomSheet/ProjectCreateBottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { FC, ReactNode, useState } from "react";
import styles from "./CreateProject.module.css";

interface ICreateProjectProps {
	children?: ReactNode;
}

export const CreateProject: FC<ICreateProjectProps> = () => {
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

	return (
		<div className={styles.create_project}>
			<Button className={styles.create_button} onClick={() => setIsBottomSheetOpen(true)}>
				Create project
			</Button>

			<ProjectCreateBottomSheet
				isOpen={isBottomSheetOpen}
				onOutsideClick={() => setIsBottomSheetOpen(false)}
			/>
		</div>
	);
};
