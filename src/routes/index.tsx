import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../pages/Layout";
import { PrivateRouter } from "./PrivateRoute";
import { RoleRoute } from "./RoleRoute";
import { TaskPage } from "../pages/TaskPage";
import { CreateTaskPage } from "../pages/CreateTaskPage"
import { NotFound } from "../pages/NotFoundPage";
import { TaskDetailPage } from "../pages/TaskDetailPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                element: <PrivateRouter />,
                children: [
                    {
                        path: '/',
                        element: <RoleRoute roles={[
                            'teamLead',
                            'member'
                        ]
                        } />,
                        children: [
                            {
                                index: true,
                                element: <TaskPage />
                            },
                            {
                                path: '/tasks/:id',
                                element: <TaskDetailPage />
                            }

                        ]
                    },
                    {
                        path: 'create-task',
                        element: <RoleRoute roles={[
                            'teamLead'
                        ]} />,
                        children: [
                            {
                                index: true,
                                element: <CreateTaskPage />
                            }

                        ]
                    },


                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])