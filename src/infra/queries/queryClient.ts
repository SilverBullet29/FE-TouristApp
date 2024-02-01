import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});

export { queryClient };
