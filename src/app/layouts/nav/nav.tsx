import { FC, ReactNode } from "react";
import styles from "./nav.module.css"

interface NavProps {
   children: ReactNode
}

const Nav: FC<NavProps> = ({children}) => {
   return ( 
      <nav className={styles.nav}>{children}</nav>
    );
}
 
export default Nav;