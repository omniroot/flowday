import { useHeader } from "@features/storage/stores/header.storage.ts";
import { TasksList } from "@features/tasks/components/TasksList/TasksList.tsx";
import axios from "axios";
import { useEffect } from "react";
import styles from "./home.page.module.css";

export const HomePage = () => {
	const { setTitle } = useHeader();
	useEffect(() => {
		setTitle("Home");
	}, [setTitle]);

	useEffect(() => {
		const fetch = async () => {
			const { data } = await axios.get("http://localhost:10001");
			console.log(data);
		};
		fetch();
	}, []);

	return (
		<>
			<span>home page</span>
			<TasksList />
		</>
	);
};
