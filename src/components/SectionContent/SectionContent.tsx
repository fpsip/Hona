import classNames from "classnames";

import { ComponentProps } from "types";

import styles from "./SectionContent.module.sass";


const SectionContent = ({ className, children }: ComponentProps) => {
  return (
    <div className={classNames(styles.SectionContent, className)}>
      {children}
    </div>
  );
}


export default SectionContent;
