import React from "react";
import Head from "./components/sections/Head";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Tools from "./components/sections/Tools";
import Portfolio from "./components/sections/Portfolio";
import Layout from "./components/layout/Layout";
import "./styles/globals.css";

function App() {
  return (
    <Layout>
      <Head />
      <About />
      <Skills />
      <Tools />
      <Portfolio />
    </Layout>
  );
}

export default App;