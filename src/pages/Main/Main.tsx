import { useState, createContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const showAlert = () => setIsAlertVisible(true);
  const hideAlert = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setIsAlertVisible(false);
  };

  const [isReserveFormVisible, setIsReserveFormVisible] = useState(false);
  const showReserveForm = () => setIsReserveFormVisible(true);
  const hideReserveForm = () => setIsReserveFormVisible(false);


  return (
    <div>
      <Snackbar
        open={isAlertVisible}
        autoHideDuration={6000}
        onClose={hideAlert}
      >
        <Alert
          onClose={hideAlert}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Ваш запрос принят! Ожидайте звонка!
        </Alert>
      </Snackbar>
      <ModalWindow
        isVisible={isReserveFormVisible}
        close={hideReserveForm}
      >
        <ReserveForm submit={() => { showAlert(); hideReserveForm() }} />
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
