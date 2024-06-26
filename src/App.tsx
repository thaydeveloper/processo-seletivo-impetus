import { useState } from "react";

import ProfileCard from "./teste-1/ProfileCard/ProfileCard";
import { Box } from "@mui/material";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./teste-2/TodoApp";
import VitrineOnline from "./teste-3/VitrineOnline";

function App() {
  return (
    <Box
      className="w-screen h-screen bg-blue-300 flex flex-col"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/Teste-1" element={<ProfileCard />} />
            <Route path="/Teste-2" element={<TodoApp />} />
            <Route path="/Teste-3" element={<VitrineOnline />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}

export default App;
