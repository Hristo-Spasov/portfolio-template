import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  return (
    // original code {darkMode && "dark"} but it gives error in the console.
    <div className={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-slate-300  dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
