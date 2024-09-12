import { Link, Outlet } from "react-router-dom";
import './index.css';

const Layout = () => {
  return (
    <>
      <div className="topNav">
            <Link  to="/Home">Home</Link>
            <Link  to="/To_Do_List">ToDoList</Link>
            <Link  to="/FetchData">FetchData</Link>
      </div>

      <div style={{ padding: '1rem' }}>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;