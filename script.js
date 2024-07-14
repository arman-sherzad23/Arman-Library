
/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
    searchClose = document.getElementById("search-close"),
    searchContent = document.getElementById("search-content")

if(searchButton){
    searchButton.addEventListener('click', ()=>{
        searchContent.classList.add('show-search')
    })
}

if(searchClose){
    searchClose.addEventListener('click', ()=>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById("login-button"),
    loginClose = document.getElementById("login-close"),
    loginContent = document.getElementById("login-content")

if(loginButton){
    loginButton.addEventListener('click', ()=>{
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', ()=>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  });

/*=============== FEATURED SWIPER ===============*/

let swiperFeatured = new Swiper('.featured-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

     navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
  });

/*=============== NEW SWIPER ===============*/

let swiperNew = new Swiper('.new-swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('testimonial"')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
