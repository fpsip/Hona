import { SectionContent } from "components/SectionContent";
import { CAFE_NAME } from "constants/cafe";

import styles from "./Footer.module.sass";


const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <SectionContent className={styles.content}>
        <div>{CAFE_NAME}</div>
      </SectionContent>
    </footer>
  );
};


export default Footer;
