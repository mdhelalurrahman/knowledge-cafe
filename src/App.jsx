import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Blog from "./component/Blog/Blog";
import SideCard from "./component/SideCard/SideCard";
import Footer from "./component/Footer/Footer";

function App() {
  const [watchTime, setWatchTime] = useState("");
  const [read, setRead] = useState([]);
  const handlerMark = (time) => {
    const previousTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousTime) {
      const sum = previousTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
  const readMark = (read1) => {
    // console.log(read1)
    const newRead = [...read, read1];
    console.log(newRead);
    setRead(newRead);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="flex justify-between flex-wrap px-10 mt-8 ">
        <div>
          <Blog handlerMark={handlerMark} readMark={readMark}></Blog>
        </div>
        <div>
          <SideCard watchTime={watchTime} read={read}></SideCard>
        </div>
      </div>
      {/* <ToastContainer></ToastContainer> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
