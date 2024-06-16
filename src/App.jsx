import React from "react";
import "./App.css";
import DialogBox from "./Sections/DialogBox";
import Header from "./Sections/Header";
import Introduction from "./Sections/Introduction";
import AdminSection from "./Sections/AdminSection";
import FacultySection from "./Sections/FacultySection";
import TechnologiesUsedSection from "./Sections/TechnologiesUsedSection";
import DeploymentSection from "./Sections/DeploymentSection";
import Footer from "./Sections/Footer";
import StudentSection from "./Sections/StudentSection";

function App() {
  return (
    <div className="flex flex-col min-h-dvh w-full animate-fade-down animate-once animate-duration-[2100ms]">
      <DialogBox />
      <Header />
      <main className="flex-1">
        <Introduction />
        <AdminSection />
        <FacultySection />
        <StudentSection />
        <TechnologiesUsedSection />
        <DeploymentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
