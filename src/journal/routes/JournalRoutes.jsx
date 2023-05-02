import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>
      {/* App */}
      <Route path="/" element={<JournalPage />} />

      {/* Evitamos llevar a querys inexistentes */}
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
