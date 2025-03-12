export type Flight = {
   id: string
   img: string
   fileType: string
   filesQty: string | number
   addDate: string
   tags: string[]
}

export type Option = {
   value: string
   label: string
}


export const flights:Flight[] = [
   {
      id: '663с7…a2d1',
      img: './public/landscape_1.png',
      fileType: 'Фото',
      filesQty: 12,
      addDate: '23.01.2023',
      tags: ['#Лес', '#Кадры']
   },
   {
      id: '663с7…a24d1',
      img: './public/landscape_2.png',
      fileType: 'Видео',
      filesQty: 2,
      addDate: '22.01.2023',
      tags: ['#Лес', '#Пролеты']
   },
   {
      id: '663с7…a22d1',
      img: './public/landscape_2.png',
      fileType: 'Фото',
      filesQty: 3,
      addDate: '23.01.2023',
      tags: ['#Лес', '#Пролеты']
   },
   {
      id: '663с7…a2d61',
      img: './public/landscape_1.png',
      fileType: 'Фото',
      filesQty: 7,
      addDate: '23.01.2023',
      tags: ['#Лес', '#Кадры']
   },
   {
      id: '663с7…a2d71',
      img: './public/landscape_1.png',
      fileType: 'Фото',
      filesQty: 8,
      addDate: '23.01.2023',
      tags: ['#Лес', '#Кадры']
   },
   {
      id: '663с7…a2d111',
      img: './public/landscape_2.png',
      fileType: 'Видео',
      filesQty: 22,
      addDate: '23.01.2023',
      tags: ['#Лес', '#Пролеты']
   },
   {
      id: '6633с7…a2d1',
      img: './public/landscape_1.png',
      fileType: 'Фото',
      filesQty: 45,
      addDate: '23.01.2023',
      tags: ['#Лес', '#Кадры']
   },
   {
      id: '6563с7…a2d1',
      img: './public/landscape_1.png',
      fileType: 'Фото',
      filesQty: 1,
      addDate: '11.01.2023',
      tags: ['#Лес', '#Кадры']
   },
   {
      id: '663с79…a2d1',
      img: './public/landscape_2.png',
      fileType: 'Видео',
      filesQty: 9,
      addDate: '11.01.2023',
      tags: ['#Лес', '#Пролеты']
   },
   {
      id: '663с7…a2d10',
      img: './public/landscape_1.png',
      fileType: 'Фото',
      filesQty: 17,
      addDate: '11.01.2023',
      tags: ['#Лес', '#Кадры']
   },
]