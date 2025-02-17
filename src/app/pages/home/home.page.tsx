import { MonthView } from "@features/calendar/components/MonthView/MonthView.tsx";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { useEffect } from "react";

export const HomePage = () => {
	const { setTitle } = useHeader();
	useEffect(() => {
		setTitle("Calendar");
	}, [setTitle]);

	return (
		<>
			<MonthView />

			{/* <TasksList /> */}
		</>
	);
};
