import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { ProjectsPage } from "@pages/projects/projects.page.tsx";
import { createRoute } from "@tanstack/react-router";

export const projectsRoute = createRoute({
	path: "/projects",
	getParentRoute: () => rootRoute,

	component: () => (
		<PageTransition>
			<ProjectsPage />
		</PageTransition>
	),
});
