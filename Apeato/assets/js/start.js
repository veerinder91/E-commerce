
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    
  }
  slides[slideIndex-1].style.display = "block";  
 
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


/********************dropdwon******************** */

function toggleDropdown(header) {
  const content = header.nextElementSibling;
  const arrow = header.querySelector('.arrow');

  if (content.style.display === "block") {
    content.style.display = "none";
    arrow.classList.remove("up");
    arrow.classList.add("down");
  } else {
    content.style.display = "block";
    arrow.classList.remove("down");
    arrow.classList.add("up");
  }
}

/************************************************* */
