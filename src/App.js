import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AddItem from "./pages/AddItem/AddItem";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import RetrieveItem from "./pages/RetrieveItem/RetrieveItem";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/retrieve" element={<RetrieveItem />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
