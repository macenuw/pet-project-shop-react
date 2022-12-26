// logo
import logoPng from "./images/logo/logo.png";
import logoWebP from "./images/logo/logo.webp";


// top-slider imgs
import slide from './images/top-slider/slide1.jpg'
import slide1 from './images/top-slider/slide2.jpg'
import slide2 from './images/top-slider/slide3.jpg'


// contact img
import life from "./images/contact/life.png";
import kyivstar from "./images/contact/kyivstar.png";
import mail from "./images/contact/mail.png";

export const logo = {
  srcPng: logoPng,
  srcWebP: logoWebP,
  alt: "Логотип Интернет-магазина 3740",
  link: "/",
};

export const menuInfo = [{
    name: "Главная",
    href: '/'
  },
  {
    name: "Каталог",
    href: '/catalog/all'
  }
]

export const contact = [{
  provider: life,
  contact: '+380939902231',
  href: 'tel:+380939902231'
}, {
  provider: kyivstar,
  contact: '+380979063963',
  href: 'tel:+380979063963'
}, {
  provider: mail,
  contact: '3740rozovaya@gmail.com',
  href: 'mailto:3740rozovaya@gmail.com'
}]



export const topSliderInfo = [{
  img: slide,
  alt: 'Выбирай уникальное',
  text: 'Выбирай уникальное'
}, {
  img: slide1,
  alt: 'Выбирай уникальное',
  text: 'Выбирай уникальное'
}, {
  img: slide2,
  alt: 'Выбирай уникальное',
  text: 'Выбирай уникальное'
}];


export const TopProduct = [{
    name: 'Гольф длинный рукав',
    model: '8-3',
    text: 'Котон 70% кожа 30%',
    season: ['winter', 'autumn', 'spring'],
    colors: [
      "beet",
      "beige",
      "black",
      "brick",
      "bordeaux",
      "brown",
      "coral",
      "dark-beige",
      "dark-blue",
      "dark-cappuccino",
      "dark-gray",
      "dark-green",
      "electric",
      "gray",
      "khaki",
      "mustard",
      "pale-rose",
      "powder",
      "raspberries",
      "red",
      "white",
    ],
    price: 125,
    size: 'S'
  },
  {
    name: 'Лодка длинный рукав',
    model: '148-3',
    text: 'Котон 70% кожа 30%',
    season: ['winter', 'autumn', 'spring'],
    colors: [
      "beet",
      "beige",
      "black",
      "brick",
      "bordeaux",
      "brown",
      "coral",
      "dark-beige",
      "dark-blue",
      "dark-cappuccino",
      "dark-gray",
      "dark-green",
      "electric",
      "gray",
      "khaki",
      "mustard",
      "pale-rose",
      "powder",
      "raspberries",
      "red",
      "white",
    ],
    price: 125,
    size: "S"
  },
  {
    name: 'Гольф отворот',
    model: '80-3',
    text: 'Котон 70% кожа 30%',
    season: ['winter'],
    colors: [
      "beet",
      "beige",
      "black",
      "brick",
      "bordeaux",
      "brown",
      "coral",
      "dark-beige",
      "dark-blue",
      "dark-cappuccino",
      "dark-gray",
      "dark-green",
      "electric",
      "gray",
      "khaki",
      "mustard",
      "pale-rose",
      "powder",
      "raspberries",
      "red",
      "white",
    ],
    price: 135,
    size: 'S'
  },
]