import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Model } from "pages";

import styles from "./App.module.sass";


const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="gallery/" element={<Main />} />
          <Route path="gallery/preview/:modelId" element={<Model />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
