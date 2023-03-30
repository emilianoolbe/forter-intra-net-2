import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../components/Pages/Inicio";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Calendario } from "../components/Pages/Calendario";
import { Error404 } from "../components/Pages/Error404";

export const Enrutador = () => {
  return (
    <>
      <BrowserRouter>
        {/* Header */}
          <Header />

        {/* Contenido */}
        <Routes>
          <Route path="/" element={ <Inicio /> } />
          <Route path="/calendario" element={ <Calendario />} />
          <Route path="*" element={ <Error404 />} />
        </Routes>

        {/* Footer */}
          <Footer />

      </BrowserRouter>
    </>
  );
};
