import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import styles from "./CreateTaskBottomSheet.module.scss";
import { FC } from "react";
interface ICreateTaskBottomSheetProps {
	isOpen: boolean;
	onOutsideClick: () => void;
}
export const CreateTaskBottomSheet: FC<ICreateTaskBottomSheetProps> = ({
	isOpen,
	onOutsideClick,
}) => {
	return (
		<BottomSheet isShow={isOpen} onOutsideClick={onOutsideClick}>
			<div className={styles.content}>create task</div>
		</BottomSheet>
	);
};
