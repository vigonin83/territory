import { FC } from 'react'
import styles from './inputDate.module.css'

interface InputDateProps {
	id: string
	name: string
	radiusSide: string
	placeholder: string
}

const InputDate: FC<InputDateProps> = ({ id, name, radiusSide, placeholder }) => {
	return (
		<input
			className={radiusSide === 'left' ? styles.input : styles.input__right}
			id={id}
			name={name}
			type='text'
			placeholder={placeholder}
		/>
	)
}

export default InputDate
