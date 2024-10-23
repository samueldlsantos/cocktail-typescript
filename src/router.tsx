import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexView from "./views/IndexView";
import FavoritesView from "./views/FavoritesView";
import Layout from "./layouts/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route path="/favorites" element={<FavoritesView />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
