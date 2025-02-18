import type { FlatMockServerConfig } from "mock-config-server";

import { getUserRequest, getUsersRequest, postUserRequest } from "./mock-requests";

const mockServerConfig: FlatMockServerConfig = [
	{
		port: 10001,
		baseUrl: "/",
		database: {
			data: "./server/db.json",
			routes: {
				// "": "",
			},
		},
		cors: {
			allowedHeaders: ["*"],
			origin: ["http://localhost:10000", "http://192.168.1.34:10000"],
		},
	},
	{
		name: "rest",
		configs: [getUserRequest, getUsersRequest, postUserRequest],
	},
];

export default mockServerConfig;
