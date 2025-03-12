import { FC } from 'react'
import styles from './card.module.css'

interface CardProps {
	id: string
	img: string
	filesQty: number | string
	fileType: string
   addDate: string
   idx: number
   tags: string[]
}

const Card: FC<CardProps> = ({id, img, filesQty, fileType, addDate, tags, idx}) => {

   const getTagColor = (tag: string) => {
      const lowerCaseText = tag.toLowerCase()
      if(lowerCaseText === '#лес') {
         return styles.card__tags_green
      } else if (lowerCaseText === '#пролеты') {
         return styles.card__tags_red
      } else if(lowerCaseText === '#кадры') {
         return styles.card__tags_orange
      } else {
         return ''
      }
   }

	return (
		<div className={styles.card}>
			<div className={styles.card__wrapper}>
				<div className={styles.card__title_wrapper}>
					<img
						className={styles.titlePic}
						src='./public/photo-film.svg'
						alt='Пролет'
					/>
					<h3 className={styles.card__title}>{`Пролет №${idx}`}</h3>
				</div>
				<div className={styles.card__img_container}>
					<img
						className={styles.card__img}
						src={img}
						alt='ландшафт'
					/>
				</div>
				<div className={styles.card__data}>
					<div className={styles.card__data_wrapper}>
						<p>ID</p>
						<div className={styles.card__id_wrapper}>
							<span className={styles.card__note}>{id}</span>
							<img
								src='./public/clone.svg'
								alt='id'
							/>
						</div>
						<div className={styles.card__files_wrapper}>
							<span>Тип файлов</span>
							<img
								src='./public/file-image.png'
								alt='фото'
							/>{' '}
							<span className={styles.card__note}>{fileType}</span>
						</div>
						<div className={styles.card__files_container}>
							<span>Кол-во файлов</span>
							<span className={styles.card__note}>{filesQty}</span>
						</div>
						<p>Дата добавления</p>
						<p className={styles.card__date}>
							<span className={styles.card__note}>{addDate}</span>
						</p>
						<p>Теги</p>
						<div className={styles.card__tags_container}>
                     {tags.map((tag, idx) => (
                        <span key={idx} className={getTagColor(tag)}>{tag}</span>
                     ))}
							<button className={styles.card__tag_btn}>
								<img
									className={styles.card__tag_pic}
									src='./public/arrow.svg'
									alt='раскрыть'
								/>
							</button>
						</div>
						<p>Нейросети</p>
						<div className={styles.card__pics_container}>
							<img
								src='./public/cup.svg'
								alt='нейросети'
							/>
							<img
								src='./public/belt.svg'
								alt='нейросети'
							/>
							<img
								src='./public/phone.svg'
								alt='нейросети'
							/>
							<img
								src='./public/smile.svg'
								alt='нейросети'
							/>
							<img
								src='./public/cup.svg'
								alt='нейросети'
							/>
							<img
								src='./public/belt.svg'
								alt='нейросети'
							/>
							<button className={styles.card__info_btn}>
								<img
									className={styles.card__tag_pic}
									src='./public/arrow.svg'
									alt='раскрыть'
								/>
							</button>
						</div>
						<div className={styles.card__qty_wrapper}>
							<span>Количество</span>{' '}
							<img
								src='./public/network.svg'
								alt='количество'
							/>
							<span className={styles.card__qty}>12</span>
							<img
								className={styles.card__settings_img}
								src='./public/eye.svg'
								alt='количество'
							/>
						</div>
						<div className={styles.card__qty_container}>
							<span>Управление</span>
							<button>
								<img
									src='./public/settings.svg'
									alt='управление'
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
