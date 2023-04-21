import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./routes";

const App = () => {
  const element = useRoutes(routes);
  return (
    <>
      <Header />
      <div className=" bg-gray-900 min-h-screen">{element}</div>
      <Footer />
    </>
  );
};

export default App;
