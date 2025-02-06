import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../Pages/Home/Home";
import ProjectDetail from "../Pages/Home/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Page Not Found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/projects/:id",
                element: <ProjectDetail></ProjectDetail>,
            },
        ],
    },

]);

export default router;
