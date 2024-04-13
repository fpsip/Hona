import { ComponentProps } from "types";


interface Props extends ComponentProps {
  isVisible: boolean,
  close: () => any,
};


export default Props;
