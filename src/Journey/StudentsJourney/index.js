import React from "react";
import { Link, Outlet } from "react-router-dom";
import Appheader from "../../Components/AppHeader/Appheader";
import AuthContextProvider from "../../Context/AuthContext";

const routes = [
  {
    id: "journey-1",
    label: "Create Student",
    route: "/students/create",
  },
  {
    id: "journey-2",
    label: "Manage Student",
    route: "/students/manage",
  },
];

export default function index() {
  return (
    <>
      <Appheader journeyName="Students journey" routes={routes} />
      <Outlet />
    </>
  );
}
