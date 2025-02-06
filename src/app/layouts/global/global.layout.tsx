import { Sidebar } from "@components/business/Sidebar/Sidebar.tsx";
import { Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "./global.layout.module.css";

export const GlobalLayout = () => {
	useEffect(() => {
		const root = document.getElementById("root");
		if (root) {
			root.style.flexDirection = "row";
		}
	}, []);

	return (
		<>
			{/* <Header /> */}
			<Sidebar />
			<main className={styles.main}>
				<Outlet />
			</main>
			{/* <BottomNavigation /> */}
			{/* <ModernBottomNavigation /> */}
			{/* <SearchLayout /> */}
		</>
	);
};
