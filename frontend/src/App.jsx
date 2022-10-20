
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"




function App() {




  return (


    <Routes>

      <Route  path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />

    </Routes>

  );
}

export default App;
