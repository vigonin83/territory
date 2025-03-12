import { FC, ReactNode } from "react";
import styles from "./mainLayout.module.css"

interface MainLayoutProps {
   children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
   return ( 
      <div className={styles.main__layout}>
         {children}
      </div>
    );
}
 
export default MainLayout;