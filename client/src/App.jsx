import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Auth from "./components/layouts/Auth";
import Root from "./components/layouts/Root";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./components/layouts/PrivateRoutes";
import { Fragment } from "react";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ListRoot from "./components/layouts/ListRoot";
import List from "./pages/List";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<Auth />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='/' element={<Root />}>
        <Route index element={<LandingPage />} />

      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path='home' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='list' element={<ListRoot />}>
          <Route path=':id' element={<List />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <ToastContainer className='z-30' />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
