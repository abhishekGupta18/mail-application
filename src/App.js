import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Inbox } from "./Pages/Inbox/Inbox";
import { Starred } from "./Pages/Starred/Starred";
import { Trash } from "./Pages/Trash/Trash";
import { Spam } from "./Pages/Spam/Spam";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/spam" element={<Spam />} />
      </Routes>
    </div>
  );
}

export default App;
