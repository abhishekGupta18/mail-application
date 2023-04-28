import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Inbox } from "./Pages/Inbox/Inbox";
import { Starred } from "./Pages/Starred/Starred";
import { Trash } from "./Pages/Trash/Trash";
import { Spam } from "./Pages/Spam/Spam";
import { MailDetails } from "./MailDetails/MailDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/:mailId" element={<MailDetails />} />
      </Routes>
    </div>
  );
}

export default App;
