import { FC } from 'react'
import styles from './inputSelect.module.css'
import { Option } from '../../../../data/data'

interface InputSelectProps {
	width: string
   options: Option[]
   id: string
   name: string
}

const InputSelect: FC<InputSelectProps> = ({ width, options, id, name }) => {
	return (
		<div
			className={styles.select__wrapper}
		>
			<select className={styles.select} id={id} name={name}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>{option.label}</option>
				))}
			</select>
			<img
				className={styles.select__arrow}
				src='./public/arrow.svg'
				alt='стрелка'
			/>
		</div>
	)
}

export default InputSelect
