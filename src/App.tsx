import React from 'react';
import MainMenu from "./ui/MainMenu/MainMenu";
import './App.css';
import Workspace from "./ui/Workspace/Workspace";

function App() {
  return (
    <div className="App">
        <Workspace items={[
            {caption: 'Timer',iconName: 'timer'},
            {caption: 'Meditations', iconName:'wifi'},
            {caption: 'Video', iconName: 'theaters'},
            {caption: 'Audio', iconName: 'audiotrack'},
            {caption: 'Books', iconName: 'book'},
            {caption: 'Songs', iconName: 'audiotrack'}]} />
      <MainMenu />
    </div>
  );
}

export default App;
