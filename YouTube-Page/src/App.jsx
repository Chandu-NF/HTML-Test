import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ExplorePage from './Explore';
import HomePage from './Home';
import Layout from './Layout';
import SearchPage from './Search';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
