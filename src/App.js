import "./App.css";
import Header from "./components/Header";
import NoteListPages from "./pages/NoteListPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<NoteListPages />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
