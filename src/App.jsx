import HeaderNavbar from "./components/header";
import SideBar from "./components/sideBar";
import CreatePost from "./components/createpost";
import PostList from "./components/postList";
import Footer from "./components/footer";
import "./App.css";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedtab, setselectedteb] = useState("Home");
  return (
    <PostListProvider>
      <div className="main_container">
        <SideBar selectedtab={selectedtab} setselectedteb={setselectedteb} />
        <div className="content">
          <HeaderNavbar />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
