import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Firm from "./Components/Pages/Firm";
import Team from "./Components/Pages/Team";
import JoinUs from "./Components/Pages/JoinUs";
import PracticeArea from "./Components/Pages/PracticeArea";
import Banking from "./Components/Pages/Banking";
import Mergers from "./Components/Pages/Mergers";
import Corporate from "./Components/Pages/Corporate";
import Litigation from "./Components/Pages/Litigation";
import NewsPublication from "./Components/Pages/NewsPublication";
import Contact from "./Components/Pages/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-firm" element={<Firm />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/practice-area" element={<PracticeArea />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/mergers" element={<Mergers />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/litigation" element={<Litigation />} />
        <Route path="/news-and-publication" element={<NewsPublication />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
