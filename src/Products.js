// iPhones
import iphone5sBlackNew from './assets/products/iphones/iphone5s-black-new.png';
import iphone5sBlackGood from './assets/products/iphones/iphone5s-black-good.png';
import iphone6sRosegoldNew from './assets/products/iphones/iphone6s-rosegold-new.png';
import iphone6sGreyNew from './assets/products/iphones/iphone6s-grey-new.png';
import iphone7plusBlackGood from './assets/products/iphones/iphone7plus-black-good.png';
import iphone7plusBlackAcceptable from './assets/products/iphones/iphone7plus-black-acceptable.png';
import iphone8SilverGood from './assets/products/iphones/iphone8-silver-good.png';
import iphone8plusGoldNew from './assets/products/iphones/iphone8plus-gold-new.png'
import iphoneseRedNew from './assets/products/iphones/iphonese-red-new.png'
import iphone11promaxGreenAcceptable from './assets/products/iphones/iphone11promax-green-acceptable.png';

// iPads
import ipadair109BlueNew from './assets/products/ipads/ipadair109-blue-new.png';
import ipadair109BlackGood from './assets/products/ipads/ipadair109-black-good.png';
import ipadmini4SilverAcceptable from './assets/products/ipads/ipadmini4-silver-acceptable.png';
import ipadpro105SilverGood from './assets/products/ipads/ipadpro105-silver-good.png';
import ipadpro129GreyNew from './assets/products/ipads/ipadpro129-grey-new.png';

// MacBooks
import macbookairGreyNew from './assets/products/macbooks/macbookair-grey-new.png';
import macbookairSilverAcceptable from './assets/products/macbooks/macbookair-silver-acceptable.png';
import macbookairGoldGood from './assets/products/macbooks/macbookair-gold-good.png';
import macbookproGreyAcceptable from './assets/products/macbooks/macbookpro-grey-acceptable.png';
import macbookproSilverNew from './assets/products/macbooks/macbookpro-silver-new.png';

// Apple Watches
import watch3gps38GreyGood from './assets/products/watches/watch3gps38-grey-good.png';
import watch6gps40GoldNew from './assets/products/watches/watch6gps40-gold-new.png';
import watchsecellular40PistachioAcceptable from './assets/products/watches/watchsecellular40-pistachio-acceptable.png';
import watch6cellular44GreyNew from './assets/products/watches/watch6cellular44-grey-new.png';

// iPhone, iPad, MacBook, Apple Watch
// Used - Acceptable, Used - Like New, Used - Good

const allProducts = [
    // iPhones
    {
    id: "0",
    category: "iPhone",
    name: "iPhone 5s 64GB",
    image: iphone5sBlackNew,
    price: "129.97",
    rating: 3.1,
    quality: "Used - Like New",
    colour: "Black",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "1",
    category: "iPhone",
    name: "iPhone 5s 16GB",
    image: iphone5sBlackGood,
    price: "69.97",
    rating: 2.4,
    quality: "Used - Good",
    colour: "Black",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "2",
    category: "iPhone",
    name: "iPhone 6s 256GB",
    image: iphone6sRosegoldNew,
    price: "199.97",
    rating: 3.9,
    quality: "Used - Like New",
    colour: "Rose Gold",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "3",
    category: "iPhone",
    name: "iPhone 6s 64GB",
    image: iphone6sGreyNew,
    price: "209.97",
    rating: 4.1,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "4",
    category: "iPhone",
    name: "iPhone 7 Plus 128GB",
    image: iphone7plusBlackGood,
    price: "219.97",
    rating: 3.8,
    quality: "Used - Good",
    colour: "Jet Black",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "5",
    category: "iPhone",
    name: "iPhone 7 Plus 256GB",
    image: iphone7plusBlackAcceptable,
    price: "209.97",
    rating: 3.2,
    quality: "Used - Acceptable",
    colour: "Black",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "6",
    category: "iPhone",
    name: "iPhone 8 256GB",
    image: iphone8SilverGood,
    price: "299.95",
    rating: 3.9,
    quality: "Used - Good",
    colour: "Silver",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "7",
    category: "iPhone",
    name: "iPhone 8 Plus 256GB",
    image: iphone8plusGoldNew,
    price: "319.97",
    rating: 4.2,
    quality: "Used - Like New",
    colour: "Gold",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "8",
    category: "iPhone",
    name: "iPhone SE 128GB",
    image: iphoneseRedNew,
    price: "699.98",
    rating: 4.3,
    quality: "Used - Like New",
    colour: "(PRODUCT)RED",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "9",
    category: "iPhone",
    name: "iPhone 11 Pro Max 64GB",
    image: iphone11promaxGreenAcceptable,
    price: "735.99",
    rating: 4.1,
    quality: "Used - Acceptable",
    colour: "Midnight Green",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },

  // iPads

  {
    id: "10",
    category: "iPad",
    name: "iPad Air 10.9 Inch 256GB",
    image: ipadair109BlueNew,
    price: "649.95",
    rating: 3.1,
    quality: "Used - Like New",
    colour: "Sky Blue",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "11",
    category: "iPad",
    name: "iPad Air 10.9 Inch 64GB",
    image: ipadair109BlackGood,
    price: "619.95",
    rating: 2.3,
    quality: "Used - Good",
    colour: "Space Grey",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "12",
    category: "iPad",
    name: "iPad Mini 4 Wi-Fi 16GB",
    image: ipadmini4SilverAcceptable,
    price: "175.99",
    rating: 1.4,
    quality: "Used - Acceptable",
    colour: "Silver",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "13",
    category: "iPad",
    name: "iPad Pro 10.5 2017 64GB",
    image: ipadpro105SilverGood,
    price: "719.99",
    rating: 3.6,
    quality: "Used - Good",
    colour: "Silver",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "14",
    category: "iPad",
    name: "iPad Pro 12.9 2020 64GB",
    image: ipadpro129GreyNew,
    price: "799.99",
    rating: 4.9,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },

  // MacBooks

  {
    id: "15",
    category: "MacBook",
    name: "MacBook Air M1 2020 256GB",
    image: macbookairGreyNew,
    price: "999.99",
    rating: 4.3,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "16",
    category: "MacBook",
    name: "MacBook Air M1 2020 256GB",
    image: macbookairSilverAcceptable,
    price: "999.99",
    rating: 1.2,
    quality: "Used - Acceptable",
    colour: "Silver",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "17",
    category: "MacBook",
    name: "MacBook Air M1 2020 512GB",
    image: macbookairGoldGood,
    price: "1399.99",
    rating: 4.2,
    quality: "Used - Good",
    colour: "Gold",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "18",
    category: "MacBook",
    name: "MacBook Pro M1 13\" 2020 256GB",
    image: macbookproGreyAcceptable,
    price: "1629.95",
    rating: 2.9,
    quality: "Used - Acceptable",
    colour: "Space Grey",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "19",
    category: "MacBook",
    name: "MacBook Pro i5 16\" 2020 1TB",
    image: macbookproSilverNew,
    price: "2299.97",
    rating: 4.5,
    quality: "Used - Like New",
    colour: "Silver",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },

  // Apple Watches

  {
    id: "20",
    category: "Apple Watch",
    name: "Apple Watch Series 3 GPS, 38mm",
    image: watch3gps38GreyGood,
    price: "149.98",
    rating: 3.3,
    quality: "Used - Good",
    colour: "Silver",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "21",
    category: "Apple Watch",
    name: "Apple Watch Series 6 GPS, 40mm",
    image: watch6gps40GoldNew,
    price: "349.98",
    rating: 4.2,
    quality: "Used - Like New",
    colour: "Gold",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "22",
    category: "Apple Watch",
    name: "Apple Watch SE Cellular, 40mm",
    image: watchsecellular40PistachioAcceptable,
    price: "239.98",
    rating: 2.3,
    quality: "Used - Acceptable",
    colour: "Pistachio",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  {
    id: "23",
    category: "Apple Watch",
    name: "Apple Watch Series 6 Cellular, 44mm",
    image: watch6cellular44GreyNew,
    price: "509.97",
    rating: 4.8,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "This iPhone 11 Pro Max, ",
    reviews: ['"really good"'],
    reviewName: ["", ""]
  },
  ]

  export default allProducts;