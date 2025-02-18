import { client } from "@/shared/api/query-client.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/router.tsx";
import "./styles/main.css";

dayjs().locale("en");
dayjs.extend(relativeTime);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>,
);
