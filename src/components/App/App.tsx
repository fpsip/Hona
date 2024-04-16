import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Model } from "pages";

import styles from "./App.module.sass";


const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="Hona/" element={<Main />} />
          <Route path="Hona/preview/:modelId" element={<Model />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
