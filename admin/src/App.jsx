import React from "react";
import QuestionPage from "./components/QuestionPage";
import TopicPage from "./components/TopicPage";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar fixed on left */}
        <SideBar />

        {/* Main content area */}
        <div className="flex-1 p-6 bg-zinc-900 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<TopicPage />} />
            <Route path="/question" element={<QuestionPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
