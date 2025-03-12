import { FC, ReactNode } from 'react'
import styles from './btn.module.css'

interface BtnProps {
	children: ReactNode
}

const Btn: FC<BtnProps> = ({ children }) => {
	return <button className={styles.btn}>{children}</button>
}

export default Btn
