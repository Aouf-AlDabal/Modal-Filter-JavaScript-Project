//Use an IIFE to avoid contanminating global namespce
const buttonsFilter = document.querySelectorAll('.btn');
const storeItems   = document.querySelectorAll('.store-item');


buttonsFilter.forEach(buttonFilter => {

    buttonFilter.addEventListener('click',e =>{

        e.preventDefault();
        const filter = e.target.dataset.filter;

        storeItems.forEach(item => {

            if (filter === "all") {
                item.style.display = 'block' 
            }else{
                if (item.classList.contains(filter)) {
                    item.style.display = 'block' 
                }else{
                    item.style.display = 'none' 
                }
            }
        } )
        

    })
})

const searchBox = document.querySelector('#search-item');

searchBox.addEventListener('keyup', e=> {

    const  searchFilter = e.target.value.trim().toLowerCase();

    storeItems.forEach(item => {

        if (item.textContent.includes( searchFilter)) {
            item.style.display = 'block'
            
        }else{
            item.style.display = 'none'
        }
    })
})

let lightBox = document.querySelector('.lightbox-container');
let lightBoxItem = document.querySelector('.lightbox-item');
let images = document.querySelectorAll('.store-img');

let listImage = [];

let counterImage = 0;

    images.forEach(image => {

        listImage.push(image.src);
    });

  storeItems.forEach(item =>{

    item.addEventListener('click', e =>{

            let image = e.target.src;
            lightBoxItem.style.backgroundImage = `url(${image})`;
            lightBox.classList.add('show');
            counterImage = listImage.indexOf(image);
    });
  });

  let btnLeft = document.querySelector('.btnLeft');

  btnLeft.addEventListener('click' , ()=> {

    counterImage--;
    console.log(counterImage);
    if (counterImage < 0) {
        counterImage = listImage.length -1;
       
    }
    console.log(counterImage);
    lightBoxItem.style.backgroundImage = `url(${listImage[counterImage]})`;

  })
  let btnRight = document.querySelector('.btnRight');

  btnRight.addEventListener('click' , ()=> {

    counterImage++;
    if (counterImage >= listImage.length ) {
        counterImage = 0;
       
    }
    lightBoxItem.style.backgroundImage = `url(${listImage[counterImage]})`;

  })

  let lightBoxClose = document.querySelector('.lightbox-close');

  lightBoxClose.addEventListener('click' , ()=> {

    lightBox.classList.remove ('show');
  })