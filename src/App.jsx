import "./App.css";

import React, { useEffect, useState } from "react";

import { MyContext } from "./components/context/MyContext";

import AppRouter from "./components/router/AppRouter";

const urlJson = "./src/data/data.json";

const App = () => {
  const [data, setData] = useState([]);

  const [cart, setCart] = useState([]);

  const getInfo = async () => {
    const res = await fetch(urlJson);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div>
      <MyContext.Provider value={{ data, cart, setCart }}>
        <AppRouter />
      </MyContext.Provider>
    </div>
  );
};

export default App;
