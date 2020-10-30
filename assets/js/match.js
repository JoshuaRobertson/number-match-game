// Get array of images & items total
const images = [
  {
    image_name: 'bananas.jpg',
    number_of_items: 6,
  },
  {
    image_name: 'birthday-candles.jpg',
    number_of_items: 7,
  },
  {
    image_name: 'blocks.jpg',
    number_of_items: 6,
  },
  {
    image_name: 'brushes.jpg',
    number_of_items: 7,
  },
  {
    image_name: 'cakes.jpg',
    number_of_items: 7,
  },
  {
    image_name: 'cars.jpg',
    number_of_items: 2,
  },
  {
    image_name: 'crayons.jpg',
    number_of_items: 8,
  },
  {
    image_name: 'cupcakes.jpg',
    number_of_items: 7,
  },
  {
    image_name: 'deer.jpg',
    number_of_items: 3,
  },
  {
    image_name: 'donuts.jpg',
    number_of_items: 6,
  },
  {
    image_name: 'ducks.jpg',
    number_of_items: 6,
  },
  {
    image_name: 'eggs.jpg',
    number_of_items: 8,
  },
  {
    image_name: 'elephants.jpg',
    number_of_items: 7,
  },
  {
    image_name: 'hot-air-balloons.jpg',
    number_of_items: 5,
  },
  {
    image_name: 'jelly-beans.jpg',
    number_of_items: 9,
  },
  {
    image_name: 'macaroons.jpg',
    number_of_items: 7,
  },
  {
    image_name: 'pencils.jpg',
    number_of_items: 12,
  },
  {
    image_name: 'people.jpg',
    number_of_items: 6,
  },
  {
    image_name: 'peppers.jpg',
    number_of_items: 2,
  },
  {
    image_name: 'pizza-slices.jpg',
    number_of_items: 8,
  },
];

// Set the image source
const setImgSrc = (randomImgName) => {
  const imageContainer = document.getElementById('imageContainer')
  const image          = document.createElement('img')

  if (imageContainer.hasChildNodes()) {
    imageContainer.removeChild(imageContainer.firstElementChild)
  }
  image.src = `assets/img/${randomImgName}`
  imageContainer.appendChild(image)
}

const generateDisplayNumber = (numberOfItems, plusOrMinus) => {
  const split = Math.floor(Math.random() * 2)

  if (split === 0) {
    // display real number
    document.getElementById('number').innerHTML = numberOfItems
  }
  else {
    // display one higher or one lower
    document.getElementById('number').innerHTML = `${numberOfItems + plusOrMinus}`
  }
}

const generatePlusOrMinus = () => {
  const number = Math.floor(Math.random() * 2)
  return number === 0 ? -1 : +1
}

// Generate random image on page load & after time delay
const generate = () => {
  if (images.length === 0) {
    stopTimer()
    return
  }

  const randomNumber  = Math.floor(Math.random() * images.length)
  const randomImgName = images[randomNumber].image_name

  setImgSrc(randomImgName)

  const plusOrMinus = generatePlusOrMinus()
  const numberOfItems = images[randomNumber].number_of_items

  generateDisplayNumber(numberOfItems, plusOrMinus)

  images.splice(randomNumber, 1)
}

// Start & stop image cycle timer
let timerRef

const timer = () => {
  timerRef = setInterval(generate, 2500)
}

const stopTimer = () => {
  clearInterval(timerRef)
}

const play = () => {
  generate()
  timer()
}
