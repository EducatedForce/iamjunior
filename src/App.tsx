import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 2,
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
