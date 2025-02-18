import { calendarStore } from "@features/calendar/stores/calendar.store.ts";
import { useAtom } from "jotai";

export const useCalendar = () => {
	const [calendar, setCalendar] = useAtom(calendarStore);
	const { currentDate, selectedDate } = calendar;

	const setSelectedDate = (date: string) => {
		setCalendar({ ...calendar, selectedDate: date });
	};

	const parseDate = (date: string) => {
		const [day, month, year] = date.split(".");
		return { day: Number(day), month: Number(month), year: Number(year) };
	};

	return { currentDate, selectedDate, setSelectedDate, parseDate };
};
