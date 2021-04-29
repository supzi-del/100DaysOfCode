window.onload= function(){
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  
  nextBtn.addEventListener("click",function(){
    nextSlide();
  });
  
  prevBtn.addEventListener("click",function(){
    prevSlide();
  });
                                      
};

let slideNumber=0;

//next
const nextSlide = ()=>{
  const slider = document.getElementById('slider');
  const slides = slider.getElementsByClassName('slides');
  const currentSlide = slider.getElementsByClassName('current');
  
  //logiccc
  currentSlide[0].classList.remove("current");
  if(slideNumber == (slides.length-1)){
    slideNumber = 0;
  }
  else{
    slideNumber += 1;
  }
  slides[slideNumber].classList.add("current");
};


//prev
const prevSlide = ()=>{
  const slider = document.getElementById('slider');
  const slides = slider.getElementsByClassName('slides');
  const currentSlide = slider.getElementsByClassName('current');
  
  //logiccc
  currentSlide[0].classList.remove("current");
  if(slideNumber == 0){
    slideNumber = slides.length-1;
  }
  else{
    slideNumber -= 1;
  }
  slides[slideNumber].classList.add("current");
};