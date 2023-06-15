
import AdminLayout from "./Admin/AdminLayout";
import AddBlog from "./Admin/Blog/AddBlog";
import EditBlog from "./Admin/Blog/EditBlog";
import AdminHome from "./Admin/Home/AdminHome";
import Login from "./Auth/login";
import About from "./User/About Us/About";
import Blog from "./User/Blog/Blog";
import SingleBlog from "./User/Blog/singleBlog";
import Home from "./User/Home/Home";
import UserLayout from "./User/UserLayout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      {/* user Layout start */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="single-blog/:id" element={<SingleBlog />} />
          </Route>

          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="add" element={<AddBlog />} />
            <Route path="edit/:id" element={<EditBlog />} />
          </Route>
        </Routes>
      </Router>


    </>
  );
}

export default App;