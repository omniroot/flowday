export interface IProject {
	id: number;
	title: string;
	color: string;
}

export type ICreateProject = Omit<IProject, "id">;
export type IUpdateProject = IProject;
export type IDeleteProject = Pick<IProject, "id">;
