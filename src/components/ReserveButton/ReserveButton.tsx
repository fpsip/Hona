import { useContext } from "react";

import { Button } from "components/ui";
import { ReserveContext } from "pages/Main/Main";


const ReserveButton = () => {
  const showReserveForm = useContext(ReserveContext);
  const onClick = () => {
    if (showReserveForm) showReserveForm();
  };
  return <Button onClick={onClick}>Зарезервировать</Button>;
};
 

export default ReserveButton;
