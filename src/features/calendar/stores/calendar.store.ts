import { getCurrentDate } from "@features/calendar/utils/getCurrentDate.ts";
import { atom } from "jotai";

type IDate = string;

interface ICalendarStore {
	currentDate: IDate;
	selectedDate: IDate;
}

export const calendarStore = atom<ICalendarStore>({
	currentDate: getCurrentDate(),
	selectedDate: getCurrentDate(),
});
