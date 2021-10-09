import React from 'react';
import style from './App.module.css';
import Header from '../header/Header';
import Main from '../main/Main';

const App = () => {
  return (
    <>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.main}>
        <Main />
      </div>
    </>
  );
};

export default App;
