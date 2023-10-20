import Header from "./component/Header";
import Footer from "./component/Footer";
import ListParticipant from "./component/ListParticipant";
import Add from "./component/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListParticipant />} />
            <Route path="/participant" element={<ListParticipant />} />
            <Route path="/add-participant" element={<Add />} />
            <Route path="/add-participant/:id" element={<Add />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
