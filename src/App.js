import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Home from "./routes/home/home.component";
import Button from "./components/button/button.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Button />} />
        <Route path="/menu" />
        {/* <Route path="/menu" element={<Menu/>}/> */}
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
