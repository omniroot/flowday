export interface ITask {
	id: number;
	title: string;
	description: string;
	project: number;
	completed: boolean;
	priority: "low" | "medium" | "high";
	difficult: "easy" | "medium" | "hard";
	dateStart: string; // "10.02.2025"
	dateEnd: string; // "15.02.2025"
	timeStart: string; // "12:00"
	timeEnd: string; // "15:00"
	createdAt: string; //
}

export type IGetTask = Pick<ITask, "id">;
export type ICreateTask = Partial<Omit<ITask, "id" | "createdAt">>;
export type IUpdateTask = Partial<Omit<ITask, "createdAt">>;
export type IDeleteTask = Pick<ITask, "id">;
