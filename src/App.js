import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import AddItem from "./pages/AddItem/AddItem";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import RetrieveItem from "./pages/RetrieveItem/RetrieveItem";

import {
  createUserDocument,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";

import { setCurrentUser } from "./store/user/userActions";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocument(user, "users");
        navigate("/");
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch, navigate]);
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
