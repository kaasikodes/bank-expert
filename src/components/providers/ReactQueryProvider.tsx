import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: false, //Prevent Multiple Requests from being made on faliure
      },
    },
  });
  
const ReactQueryProvider: React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{
      children
    }</QueryClientProvider>
  )
}

export default ReactQueryProvider