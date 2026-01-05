import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import { ToastContainer, toast } from 'react-toastify';
import AllMovies from './Components/AllMovies/AllMovies.jsx';
import MovieDetails from './Components/MovieDetails/MovieDetails.jsx';
import MyCollection from './Components/MyCollection/MyCollection.jsx';
import UpdateMovie from './Components/UpdateMovie/UpdateMovie.jsx';
import CreateAMovie from './Components/CreateAMovie/CreateAMovie.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Watchlist from './Components/Watchlist/Watchlist.jsx';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import DashBoardHome from './Components/DashBoard/DashBoardHome/DashBoardHome.jsx';
import DashBoardLayout from './Components/DashBoard/LayOut/DashBoardLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/movies",
        Component: AllMovies
      },
      {
        path: "/movie-details/:id",
        Component: MovieDetails
      },
      {
        path: "/update-movie/:id",
        element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>
      },
      {
        path: "*",
        Component: NotFound
      },
    ]
  },

  // Dashboard
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashBoardHome
      },
      {
        path: "/dashboard/my-collection",
        Component: MyCollection
      },
      {
        path: "/dashboard/add-movie",
        Component: CreateAMovie
      },
      {
        path: "/dashboard/watchlist",
        Component: Watchlist
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position='top-center' />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
)
