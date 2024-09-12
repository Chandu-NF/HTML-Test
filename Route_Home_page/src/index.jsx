import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchData from "./FetchData.jsx";
import Home from './Home.jsx';
import Layout from "./Layout.jsx";
import To_Do_List from "./To_Do_List.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path ="/Home" element={<Home />} />
          <Route path ="/To_Do_List" element={<To_Do_List />} />
          <Route path="/FetchData" element={<FetchData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App