import { FC, ReactNode } from 'react'
import styles from "./cardLayout.module.css"

interface CardLayoutProps {
	children: ReactNode
}

const CardLayout: FC<CardLayoutProps> = ({ children }) => {
	return <div className={styles.card__layout}>{children}</div>
}

export default CardLayout
