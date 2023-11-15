import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";
import Counter from "./components/redux/store/Counter";
import Form from "./components/redux/bankStore/Form";
import Accounts from "./components/redux/bankStore/Accounts";

function App() {

  return (
    <>
    <div>
      {/* <BrowserRouter>
         <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Counter /> */}
      <Form />
      <Accounts />
      </div>
    </>
  );
}

export default App;
