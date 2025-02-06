import { rootRoute } from "@/app/routes/router";
import { PageTransition } from "@components/ui/PageTransition/PageTransition.tsx";
import { IUserRateStatus } from "@features/userRates/types/userRates.types.ts";
import { UserPage } from "@pages/user/user.page.tsx";
import { createRoute } from "@tanstack/react-router";

interface ISearchUserRoute {
	status?: IUserRateStatus;
}

export const userRoute = createRoute({
	path: "/users/$userId",
	getParentRoute: () => rootRoute,
	validateSearch: (search: Record<string, unknown>): ISearchUserRoute => {
		return {
			status: (search?.status as IUserRateStatus) || "watching",
		};
	},
	component: () => (
		<PageTransition>
			<UserPage />
		</PageTransition>
	),
});
