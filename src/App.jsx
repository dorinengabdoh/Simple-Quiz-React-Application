import "./App.css";
import Question from "./componenent/questionComponent/Question";
import Result from "./componenent/resultComponent/Result";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const client = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Question />,
  },
  {
    path: "/Result",
    element: <Result />,
  },
]);

function App() {
  
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
