import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./components/appwrite/auth";
import { login, logout } from "./components/features/authSlice";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? null : (
    <div className="min-h-screen w-full bg-gray-400 flex flex-col">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
