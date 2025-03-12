import { FC } from 'react'
import styles from './form.module.css'
import InputText from '../inputText/inputText'
import InputSelectText from '../inputSelect/inputSelect'
import InputDate from '../inputDate/inputDate'
import Btn from '../btn/btn'

interface FormProps {}

const Form: FC<FormProps> = () => {
	const aiOptions = [
		{ value: '0', label: 'Все нейросети' },
		{ value: '1', label: 'Нейросеть 1' },
		{ value: '2', label: 'Нейросеть 2' },
		{ value: '3', label: 'Нейросеть 3' },
		{ value: '4', label: 'Нейросеть 4' },
		{ value: '5', label: 'Нейросеть 5' },
		{ value: '6', label: 'Нейросеть 6' }
	]

	const tagOptions = [
		{ value: '0', label: 'Все теги' },
		{ value: '1', label: 'Лес' },
		{ value: '2', label: 'Пролеты' },
		{ value: '3', label: 'Кадры' }
	]

	const fileOptions = [
		{ value: '0', label: 'Тип файлов' },
		{ value: '1', label: 'Фото' },
		{ value: '2', label: 'Видео' }
	]

	return (
		<form className={styles.form}>
			<div className={styles.form__text_field}>
				<img
					className={styles.form__text_img}
					src='./public/glass.svg'
					alt='поиск'
				/>
				<InputText
					id='search'
					name='search'
					type='search'
					placeholder={'Поиск медиа файлов по названию или ID'}
				/>
			</div>
			<div className={styles.form__select_first}>
				<InputSelectText
					width={'300px'}
					options={aiOptions}
					id='ai'
					name='ai'
				/>
			</div>
			<div className={styles.form__select_second}>
				<InputSelectText
					width={'300px'}
					options={tagOptions}
					id='tag'
					name='tag'
				/>
			</div>
			<div className={styles.form__select_third}>
				<InputSelectText
					width={'180px'}
					options={fileOptions}
					id='type'
					name='type'
				/>
			</div>
			<div className={styles.date__wrapper}>
				<p className={styles.date__note}>Период</p>
				<InputDate
					id='date-start'
					name='date-start'
					radiusSide={'left'}
					placeholder='Дата с'
				/>
				<img
					className={styles.date__arrow}
					src='./public/half-arrow.svg'
					alt='стрелка'
				/>
				<InputDate
					id='date-end'
					name='date-end'
					radiusSide={'right'}
					placeholder='Дата по'
				/>
				<img
					className={styles.date__pic}
					src='./public/calendar.svg'
					alt='календарь'
				/>
			</div>
			<div className={styles.nav__btn_container}>
				<button className={styles.nav__btn}>
					<img
						src='./nav.svg'
						alt='меню'
					/>
				</button>
			</div>
			<Btn>
				<span>Добавить</span>
			</Btn>
		</form>
	)
}

export default Form
