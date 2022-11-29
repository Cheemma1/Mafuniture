// hamburger menu
let menu= document.getElementById('menu');
let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', function(){
  menu.style.left='0';

});
closeMenu.addEventListener('click', function(){
menu.style.left='-300px';
});




// splide slider
var splide = new Splide( '.splide', {
  pagination:false,
  perPage: 3,
  gap    : '2rem',
  rewind : true,


  breakpoints: {
    768: {
      perPage: 2,
      gap    : '.7rem',
      height : '35rem',
    },
    480: {
      perPage: 1,
      gap    : '.7rem',
      height : '30rem',
    },
  },
});
splide.mount();


// 
const products = [
  {
    id: 1,
    title: 'Modern chair style',
    company: 'Modern style',
    image:
      'image/modern-yellow-chair-with-wooden-legs-room-lights_181624-29974.webp',
    num: '143 stock available',
  },
  {
    id: 2,
    title: 'Lounge chair style',
    company: 'Lounge chairs',
    image:
      'image/blue-dining-room-chair-room-with-gray-walls_181624-30422.webp',
    num: '568 stock available',
  },
  {
    id: 3,
    title: 'Modern style chair',
    company: 'Modern style',
    image:
      'image/comfy-wing-chair-carpenter-s-workshop_181624-25989.webp',
    num: '136 stock available',
  },
  {
    id: 4,
    title: 'Lounge chair style',
    company: 'Lounge chairs',
    image:
      'image/decoration-seat-wood-chair-rocking_1203-5192.webp',
    num: '800 stock available',
  },
  {
    id: 5,
    title: 'Rocking chair style',
    company: 'Rocking chairs',
    image:
      'image/blue-dining-room-chair-room-with-gray-walls_181624-30422.webp',
    num: '350 stock available',
  },
  {
    id: 6,
    title: 'Modern chair style',
    company: 'Modern style',
    image:
      'image/rocking-chair_74190-4557.webp',
    num: '697 stock available',
  },
  {
    id: 7,
    title: 'Lounge chair style',
    company: 'Lounge chairs',
    image:
      'image/classic-brown-textile-armchair-interior-with-curtain-wooden-floor (1).jpg',
    num: '543 stock available',
  },
  {
    id: 8,
    title: 'Rocking chair style',
    company: 'Rocking chairs',
    image:
      'image/picture-frame-mockup-psd-hanging-modern-living-room-home-decor-interior_53876-114536.webp',
    num: '743 stock available',
  },
  {
    id: 9,
    title: 'Modern chair style',
    company: 'Modern style',
    image:
      'image/classic-brown-textile-armchair-interior-with-curtain-wooden-floor (1).jpg',
    num: '443 stock available',
  },
  {
    id: 10,
    title: 'Lounge chair style',
    company: 'Lounge chairs',
    image:
      'image/white-vintage-background-seat-furniture_1203-5190.webp',
    num: '643 stock available',
  },
  {
    id: 11,
    title: 'Rocking chair style',
    company: 'Rocking chairs',
    image:
      'image/decoration-seat-wood-chair-rocking_1203-5192.webp',
    num:'943 stock available' ,
  },
    {
    id: 13,
    title: 'lounge chair style',
    company: 'Lounge chairs',
    image:
      'image/comfy-wing-chair-carpenter-s-workshop_181624-25989.webp',
    num:'139 stock available' ,
  },
 {
    id: 14,
    title: 'Rocking chair style',
    company: 'Rocking chairs',
    image:
      'image/comfy-wing-chair-carpenter-s-workshop_181624-25989.webp',
    num:'243 stock available' ,
  },
   {
    id: 15,
    title: 'Modern chair style',
    company: 'Modern style',
    image:
      'image/comfy-wing-chair-carpenter-s-workshop_181624-25989.webp',
    num:'343 stock available' ,
  },
];



let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, num } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <div>
            <h5 class="product-name">${title}</h5>
            <span class="product-num">${num}</span>
          </div>
        </article>`;
    })
    .join('');
};

displayProducts();

// Text Filter

 const form = document.querySelector('.input-form');
 const searchInput = document.querySelector('.search-input');

 form.addEventListener('keyup', () => {
   const inputValue = searchInput.value;
   filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();

});

// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes('');
//   })
// );

// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'popular',
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'popular') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});



