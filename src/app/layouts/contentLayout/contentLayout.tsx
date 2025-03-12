import { FC, ReactNode } from "react";
import styles from "./contentLayout.module.css"

interface ContentLayoutProps {
   children: ReactNode
}

const ContentLayout:FC<ContentLayoutProps> = ({children}) => {
   return ( 
      <div className={styles.content}>{children}</div>
    );
}
 
export default ContentLayout;