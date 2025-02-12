import { GlobalLayout } from "@/app/layouts/global/global.layout.tsx";
import { discoveryRoute } from "@/app/routes/discovery/discovery.route.tsx";
import { projectsRoute } from "@/app/routes/projects/projects.route.tsx";
import { settingsRoute } from "@/app/routes/settings/settings.route.tsx";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { HomePage } from "@pages/home/home.page.tsx";
import { NotFoundPage } from "@pages/notfound/notfound.page.tsx";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
	component: () => <GlobalLayout />,
});

// Home Page
const indexRoute = createRoute({
	path: "/",
	getParentRoute: () => rootRoute,
	component: () => (
		<PageTransition>
			<HomePage />
		</PageTransition>
	),
});

const routeTree = rootRoute.addChildren([indexRoute, projectsRoute, discoveryRoute, settingsRoute]);

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultNotFoundComponent: () => <NotFoundPage />,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
