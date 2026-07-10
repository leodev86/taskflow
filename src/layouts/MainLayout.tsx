import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <main className="min-h-screen bg-slate-900 text-white">
            {/* Navbar */}
            <Header />
            <div className="p-6">
                <Outlet />
            </div>
        </main>
    );
}
 
