import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="bg-white shadow-md">
		<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
			
			{/* LEFT */}
			<div className="flex items-center gap-10">
			<Link to="/" className="flex items-center gap-2">
				<img src={logo} alt="logo" className="h-10 w-auto" />
			</Link>

			<Link
				to="/search"
				className="hidden lg:block text-gray-700 font-medium hover:text-green-600 transition"
			>
				Search
			</Link>
			</div>

			{/* RIGHT */}
			{isLoggedIn() ? (
			<div className="flex items-center gap-6">
				
				{/* USER */}
				<span className="text-gray-700 font-semibold">
				Welcome!,  {user?.userName || user?.email?.split("@")[0]}
				</span>

				{/* LOGOUT */}
				<button
				onClick={logout}
				className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200"
				>
				Logout
				</button>
			</div>
			) : (
			<div className="flex items-center gap-6">
				<Link
				to="/login"
				className="text-gray-700 font-medium hover:text-green-600 transition"
				>
				Login
				</Link>

				<Link
				to="/register"
				className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200"
				>
				Signup
				</Link>
			</div>
			)}
		</div>
		</nav>
  );
};

export default Navbar;
