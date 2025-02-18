import { MonthView } from "@features/calendar/components/MonthView/MonthView.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { CreateTaskBottomSheet } from "@features/tasks/components/CreateTaskBottomSheet/CreateTaskBottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useEffect, useState } from "react";

export const HomePage = () => {
	const { setTitle } = useHeader();
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		setTitle("Calendar");
	}, [setTitle]);

	return (
		<>
			<MonthView />
			<Button style={{ width: "100%" }} onClick={() => setIsShow(true)}>
				Add task
			</Button>
			<CreateTaskBottomSheet isOpen={isShow} onOutsideClick={() => setIsShow(false)} />
			{/* <TasksList /> */}
		</>
	);
};
