import { FC } from 'react'
import styles from './inputText.module.css'

interface InputTextProps {
	id: string
	name: string
	type: string
	placeholder: string
}

const InputText: FC<InputTextProps> = ({ id, name, type, placeholder }) => {
	return (
		<input
			className={styles.input}
			id={id}
			name={name}
			type={type}
			placeholder={placeholder}
			autoComplete='off'
		/>
	)
}

export default InputText
