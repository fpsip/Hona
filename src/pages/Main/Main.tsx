import { useState, createContext } from "react";

import {
  Intro,
  About,
  MenuPreview,
  Events,
  Footer,
} from "components/sections";
import { ReserveForm } from "components/ReserveForm";
import { ModalWindow } from "components/ui";


export const ReserveContext = createContext<(() => any) | null>(null);


const Main = () => {

  const [isReserveFormVisible, setIsReserveFormVisible] = useState(false);
  const showReserveForm = () => setIsReserveFormVisible(true);
  const hideReserveForm = () => setIsReserveFormVisible(false);


  return (
    <div>

      <ModalWindow
        isVisible={isReserveFormVisible}
        close={hideReserveForm}
      >
        <ReserveForm submit={hideReserveForm} />
      </ModalWindow>

      <ReserveContext.Provider value={showReserveForm}>
        <Intro />
        <About />
        <MenuPreview />
        <Events />
        <Footer />
      </ReserveContext.Provider>

    </ div>
  );
}


export default Main;
