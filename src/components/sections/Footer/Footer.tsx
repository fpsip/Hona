import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import { SectionContent } from "components/SectionContent";
import { CAFE_NAME } from "constants/cafe";

import styles from "./Footer.module.sass";


const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <SectionContent className={styles.content}>
        <div>
          <p>{CAFE_NAME}©. Все права защищены.</p>
          <div className={styles.socialMedia}>
            <a href="https://yandex.com/" target="_blank"><InstagramIcon /></a>
            <a href="https://yandex.com/" target="_blank"><XIcon /></a>
            <a href="https://yandex.com/" target="_blank"><YouTubeIcon /></a>
            <a href="https://yandex.com/" target="_blank"><FacebookIcon /></a>
          </div>
          </div>
        <div>
          <h3>Юридические контакты</h3>
          <p>г. Краснодар, ул. Ставропольская, д. XX, 125XXX</p>
          <p>magic-castle@example.ru</p>
          <p>+7 (918) 404-XXXX</p>
        </div>
      </SectionContent>
    </footer>
  );
};


export default Footer;
