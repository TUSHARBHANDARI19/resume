function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    }else{
        menuBtn.className="nav-menu";
    }
}

// add shadow on nevigation bar while scrolling
window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navheader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        navheader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navheader.style.height = "70px";
        navheader.style.lineHeight = "70px";
}else{
    navheader.style.boxShadow = "none";
        navheader.style.height = "90px";
        navheader.style.lineHeight = "90px";
}
}


// typing effect

var typingEffect = new Typed(".typedText",{
    strings : ["Web Developer","Traveller","Learner"],
    loop:true,
    typedSpeed: 100,
    backspped: 80,
    backDelay: 2000
})


// scrool reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance:'80px',
    duration:2000,
    reset:true
})


// home
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})



// project-box

sr.reveal('.project-box',{interval: 200})


// heading
sr.reveal('.top-header',{})

// about-info
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})



//   About skills
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})

//   change active link
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)