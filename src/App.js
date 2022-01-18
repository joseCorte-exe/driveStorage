import React from 'react';
import './App.css';

import { MainApp } from './AppStyle'

import FileView from './components/fileView/FileView';
import Header from './components/header/Header.jsx';
import SideBar from './components/sidedBar/SideBar';
import SideIcon from './components/sideIcons/SideIcon';

function App() {
  return (
    <div className="App">
      <Header />
      <MainApp>
        <SideBar />
        <FileView />
        <SideIcon />
      </MainApp>
    </div>
  );
}

export default App;
