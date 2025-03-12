import { FC } from "react";
import styles from "./sidebar.module.css"

interface SidebarProps {
}

const Sidebar:FC<SidebarProps> = () => {
   return ( 
      <aside className={styles.sidebar}></aside>
    );
}
 
export default Sidebar;