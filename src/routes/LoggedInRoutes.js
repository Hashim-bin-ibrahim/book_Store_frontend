import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

export default function LoggedInRoutes() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  console.log("storedUser", storedUser);

  return storedUser ? <Outlet /> : <Login />;

}
