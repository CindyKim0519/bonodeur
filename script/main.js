

$(function(){
// best product
var slides = document.querySelector('.slides'),
slide = document.querySelectorAll('.slides li'),
currentIdx = 0,
slideCount = slide.length,
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next')
slideWidth = 200,
slideMargin = 60,
responsiveMargin = 50,
newslideWidth = slideWidth;
moveAmt = slideWidth + slideMargin,
newslideWidth,
maxSlides = 4,
newslide = document.querySelectorAll('.slides li');

  makeClone();

  function makeClone(){
    for(var i1 = 0; i1 < maxSlides; i1++){
  var cloneSlide = slide[i1].cloneNode(true);
  cloneSlide.classList.add('clone');
  slides.appendChild(cloneSlide);
}

for(var i1 = slideCount -1; i1>=0; i1--){
  var cloneSlide = slide[i1].cloneNode(true);
  cloneSlide.classList.add('clone');
  slides.prepend(cloneSlide);
}
  updateWidth();
  }

  function updateWidth(){
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth= (slideWidth + slideMargin)*newSlideCount + 'px';
    slides.style.width = newWidth;
    
  }

function slideLayout(sw,sm){
  var newslide = document.querySelectorAll('.slides li');
  moveAmt =sw+sm;
  newslide.forEach(function(item,index){
    item.style.left = moveAmt * index +'px';
    item.style.width = sw +'px';
  });
  }
  slideLayout(slideWidth, slideMargin);

function setSlide(){
var ulMoveAmt = -slideCount * moveAmt +'px';
slides.style.transform = 'translateX(' + ulMoveAmt +')';
slides.classList.add('animated');
}
setSlide();

nextBtn.addEventListener('click',function(){
  moveSlide(currentIdx+1);
});
prevBtn.addEventListener('click',function(){
  moveSlide(currentIdx-1);
});

function moveSlide(num){
  slides.style.left = moveAmt * -num +'px';
  currentIdx=num;
  console.log(currentIdx , slideCount);

  if(currentIdx == slideCount || currentIdx == -slideCount){
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    },500);
    setTimeout(function(){
      slides.classList.add('animated');
    },600);
  }
}

window.addEventListener('resize', function(){
  var currentWidth = document.querySelector('body').offsetWidth;
  console.log(currentWidth);

  if(currentWidth<=1199){
    var slideWidth = slides.offsetWidth;
    responsiveMargin = 60;
    newslideWidth = (slideWidth -(responsiveMargin * maxSlides - 1))/4;

}else{
  newslideWidth = slideWidth;
  responsiveMargin = slideMargin;
  moveAmt = newslideWidth + slideMargin;
}
if(currentWidth <=767){
  var newslideWidth = slides.offsetWidth;
  responsiveMargin = 60;
  moveAmt = newslideWidth;
}
  slideLayout(newslideWidth, responsiveMargin);
  setSlide();
  console.log(newslideWidth);
  
});



  var slides1 = document.querySelector('.slides1'),
  slide1 = document.querySelectorAll('.slides1 li'),
  currentIdx1 = 0,
  slideCount1 = slide.length,
  prevBtn1 = document.querySelector('.prev1'),
  nextBtn1 = document.querySelector('.next1')
  slideWidth1 = 200,
  slideMargin1 = 60,
  responsiveMargin1 = 56,
  newslideWidth1 = slideWidth1;
  moveAmt1 = slideWidth1 + slideMargin1,
  newslideWidth1,
  maxSlides1 = 4,
  newslide1 = document.querySelectorAll('.slides1 li');

  makeClone1();

  function makeClone1(){
    for(var i = 0; i < maxSlides1; i++){
  var cloneSlide1 = slide1[i].cloneNode(true);
  cloneSlide1.classList.add('clone1');
  slides1.appendChild(cloneSlide1);
}

for(var i = slideCount1 -1; i>=0; i--){
  var cloneSlide1 = slide1[i].cloneNode(true);
  cloneSlide1.classList.add('clone1');
  slides1.prepend(cloneSlide1);
}
  updateWidth1();

  }

  function updateWidth1(){
    var currentSlides1 = document.querySelectorAll('.slides1 li');
    var newSlideCount1 = currentSlides1.length;

    var newWidth1= (slideWidth1 + slideMargin1)*newSlideCount1 + 'px';
    slides1.style.width = newWidth1;
    
  }

function slideLayout1(sw,sm){
var newslide1 = document.querySelectorAll('.slides1 li');
moveAmt1 =sw+sm;
newslide1.forEach(function(item,index){
  item.style.left = moveAmt1 * index +'px';
  item.style.width = sw +'px';
});
}
slideLayout1(slideWidth1, slideMargin1);

function setSlide1(){
var ulMoveAmt1 = -slideCount1 * moveAmt1 +'px';
slides1.style.transform = 'translateX(' + ulMoveAmt1 +')';
slides1.classList.add('animated1');
}
setSlide1();

nextBtn1.addEventListener('click',function(){
  moveSlide1(currentIdx1+1);
});
prevBtn1.addEventListener('click',function(){
  moveSlide1(currentIdx1-1);
});

function moveSlide1(num){
  slides1.style.left = moveAmt1 * -num +'px';
  currentIdx1=num;
  console.log(currentIdx1 , slideCount1);

  if(currentIdx1 == slideCount1 || currentIdx1 == -slideCount1){
    setTimeout(function(){
      slides1.classList.remove('animated1');
      slides1.style.left = '0px';
      currentIdx1 = 0;
    },500);
    setTimeout(function(){
      slides1.classList.add('animated1');
    },600);
  }
}

window.addEventListener('resize', function(){
  var currentWidth1 = document.querySelector('body').offsetWidth;
  console.log(currentWidth1);

  if(currentWidth1<=1199){
    var slideWidth1 = slides1.offsetWidth;
    responsiveMargin1 = 60;
    newslideWidth1 = (slideWidth1 -(responsiveMargin1 * maxSlides1 - 1))/4;

}else{
  newslideWidth1 = slideWidth1;
  responsiveMargin1 = slideMargin1;
  moveAmt1 = newslideWidth1 + slideMargin1;
}

if(currentWidth1 <=767){
  var newslideWidth1 = slides1.offsetWidth;
  responsiveMargin1 = 61;
  moveAmt1 = newslideWidth1;
}
  slideLayout1(newslideWidth1, responsiveMargin1);
  setSlide1();
  console.log(newslideWidth1);
  
});

// instagram
  var slides2 = document.querySelector('.slides2'),
  slide2 = document.querySelectorAll('.slides2 li'),
  currentIdx2 = 0,
  slideCount2 = slide.length,
  prevBtn2 = document.querySelector('.prev2'),
  nextBtn2 = document.querySelector('.next2')
  slideWidth2 = 170,
  slideMargin2 = 30,
  responsiveMargin2 = 0,
  newslideWidth2 = slideWidth2;
  moveAmt2 = slideWidth2 + slideMargin2,
  newslideWidth2,
  maxSlides2 = 6,
  newslide2 = document.querySelectorAll('.slides2 li');

  makeClone2();

  function makeClone2(){
    for(var i2 = 0; i2 < maxSlides2; i2++){
  var cloneSlide2 = slide2[i2].cloneNode(true);
  cloneSlide2.classList.add('clone2');
  slides2.appendChild(cloneSlide2);
}

for(var i2 = slideCount2 -1; i2>=0; i2--){
  var cloneSlide2 = slide2[i2].cloneNode(true);
  cloneSlide2.classList.add('clone2');
  slides2.prepend(cloneSlide2);
}
  updateWidth2();

 
  }

  function updateWidth2(){
    var currentSlides2 = document.querySelectorAll('.slides2 li');
    var newSlideCount2 = currentSlides2.length;

    var newWidth2= (slideWidth2 + slideMargin2)*newSlideCount2 + 'px';
    slides2.style.width = newWidth2;
    
  }

function slideLayout2(sw,sm){
var newslide2 = document.querySelectorAll('.slides2 li');
moveAmt2 =sw+sm;
newslide2.forEach(function(item,index){
  item.style.left = moveAmt2 * index +'px';
  item.style.width = sw +'px';
});
}
slideLayout2(slideWidth2, slideMargin2);

function setSlide2(){
var ulMoveAmt2 = -slideCount2 * moveAmt2 +'px';
slides2.style.transform = 'translateX(' + ulMoveAmt2 +')';
slides2.classList.add('animated2');
}
setSlide2();

nextBtn2.addEventListener('click',function(){
  moveSlide2(currentIdx2+1);
});
prevBtn2.addEventListener('click',function(){
  moveSlide2(currentIdx2-1);
});

function moveSlide2(num){
  slides2.style.left = moveAmt2 * -num +'px';
  currentIdx2=num;
  console.log(currentIdx2 , slideCount2);

  if(currentIdx2 == slideCount2 || currentIdx2 == -slideCount2){
    setTimeout(function(){
      slides2.classList.remove('animated2');
      slides2.style.left = '0px';
      currentIdx2 = 0;
    },500);
    setTimeout(function(){
      slides2.classList.add('animated2');
    },600);
  }
}

window.addEventListener('resize', function(){
  var currentWidth2 = document.querySelector('body').offsetWidth;
  console.log(currentWidth2);

  if(currentWidth2<=1199){
    var slideWidth2 = slides2.offsetWidth;
    responsiveMargin2 = 30;
    newslideWidth2 = (slideWidth2 -(responsiveMargin2 * maxSlides2 - 1))/4;

}else{
  newslideWidth2 = slideWidth2;
  responsiveMargin2 = slideMargin2;
  moveAmt2 = newslideWidth2 + slideMargin2;
}
if(currentWidth2 <=767){
  var newslideWidth2 = slides2.offsetWidth;
  responsiveMargin2 = 0;
  moveAmt2 = newslideWidth2;
}

if(currentWidth2 <=500){
  var newslideWidth2 = slides2.offsetWidth;
  responsiveMargin2 = 0;
  moveAmt2 = newslideWidth2;
}
  slideLayout2(newslideWidth2, responsiveMargin2);
  setSlide2();
  console.log(newslideWidth2);
  
});

      $('nav>ul>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(800);
      });
      $('nav>ul>li').mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(800);
      });
   
})