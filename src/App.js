import React from "react";
import Header from "./header/header";
import Menu from "./header/Menu/menu";
import Content from "./header/Content/content";
const App = () => {
  return (
    <div className="main"> 
      <Header />
      <Menu/>
      <Content/>

    </div>
  )
}

export default App; //Позволяю другим файлам получить Доступ функции к App
