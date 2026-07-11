import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Notes from "./pages/Notes";
import Favorites from "./pages/Favorites";
import Reminders from "./pages/Reminders";
import Trash from "./pages/Trash";
import Statistics from "./pages/Statistics";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/tasks" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Dashboard />} />
      </Routes>
  );
}