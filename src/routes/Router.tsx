import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import { Register } from "../components/users/Register";
import { Welcome } from "../components/Welcome";
import { Login } from "../components/users/Login";
import { getAll, getById } from "../data/fetchApi";
import { Users } from "../components/users/Users";
import { Guides } from "../components/guides/Guides";
import { AddGuide } from "../components/guides/AddGuide";
import { Activities } from "../components/activities/Activities";
import { ApiRoute } from "../constants/enums";
import { AddActivity } from "../components/activities/AddActivity";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/users",
        element: <Users />,
        loader: () => getAll(ApiRoute.User),
        errorElement: <ErrorPage />
    },
    {
        path: "/guides",
        element: <Guides />,
        loader: () => getAll(ApiRoute.Guide),
        errorElement: <ErrorPage />
    },
    {
        path: "/guides/add",
        element: <AddGuide />,
        errorElement: <ErrorPage />
    },
    {
        path: "/guides/add/:id",
        element: <AddGuide />,
        loader: ({params}) => getById(ApiRoute.Guide, params),
        errorElement: <ErrorPage />
    },
    {
        path: "/activities",
        element: <Activities />,
        loader: () => getAll(ApiRoute.Activity),
        errorElement: <ErrorPage />
    },
    {
        path: "/activities/add",
        element: <AddActivity />,
        errorElement: <ErrorPage />
    },
    {
        path: "/activities/add/:id",
        element: <AddActivity />,
        loader: ({params}) => getById(ApiRoute.Activity, params),
        errorElement: <ErrorPage />
    },
    {
        path: "/error",
        element: <ErrorPage />,
    }
]);