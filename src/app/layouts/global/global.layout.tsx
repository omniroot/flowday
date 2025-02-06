import { Sidebar } from "@components/business/Sidebar/Sidebar.tsx";
import { Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "./global.layout.module.css";
import { ModernBottomNavigation } from "@components/business/ModernBottomNavigation/ModernBottomNavigation.tsx";
import { Header } from "@ui/Header/Header.tsx";

export const GlobalLayout = () => {
	// useEffect(() => {
	// 	const root = document.getElementById("root");
	// 	if (root) {
	// 		root.style.flexDirection = "row";
	// 	}
	// }, []);

	return (
		<>
			<Header />
			<Sidebar />
			<main className={styles.main}>
				<Outlet />
			</main>
			{/* <BottomNavigation /> */}
			<ModernBottomNavigation />
			{/* <SearchLayout /> */}
		</>
	);
};
