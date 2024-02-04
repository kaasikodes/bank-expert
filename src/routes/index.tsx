import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrimaryPageLayout from "./PrimaryPageLayout";
import { appPages } from "./pages";
import { ErrorComponent } from "components/error/ErrorComponent";
import { MiddlewareOrganizer } from "./middlewares";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryPageLayout />,
      children: appPages.map((page) => ({
        path: page.path,
        element: (
          <MiddlewareOrganizer categories={page.category}>
            <>{page.element}</>
          </MiddlewareOrganizer>
        ),
        errorElement: <ErrorComponent message="Oops! Something went wrong" />,
      })),
      errorElement: <ErrorComponent message="Oops! Something went wrong" />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
