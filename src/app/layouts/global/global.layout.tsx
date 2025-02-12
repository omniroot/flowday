import { ModernBottomNavigation } from "@components/business/ModernBottomNavigation/ModernBottomNavigation.tsx";
import { Outlet } from "@tanstack/react-router";
import { Header } from "@ui/Header/Header.tsx";
import styles from "./global.layout.module.css";

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
			{/* <Sidebar /> */}
			<main className={styles.main}>
				<Outlet />
			</main>
			{/* <BottomNavigation /> */}
			<ModernBottomNavigation />
			{/* <SearchLayout /> */}
		</>
	);
};
