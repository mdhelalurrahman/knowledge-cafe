import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Blog from "./component/Blog/Blog";
import SideCard from "./component/SideCard/SideCard";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <div className="flex justify-between px-10 mt-8">
        <Blog handlerMark={handlerMark} readMark={readMark}></Blog>
        <SideCard watchTime={watchTime} read={read}></SideCard>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
