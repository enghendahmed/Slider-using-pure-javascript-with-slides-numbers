/***********************************************************     Get and Set Elements     ******************************************/

// Get all slider images and put them in an Array using Array.from() Method 
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get the array length ( number of slides (images) )
let slidesCount = sliderImages.length;

// initialize the index of the sliderImages Array (initialize the current slide number)
let currentSlideNum = 0;

// Get the slide number label div that will appear on each displayed slide 
let slideLabelNum = document.getElementById('slider-number-label');

// Get the previous Button 
let prevButton = document.getElementById('prev');

// Get the next Button
let nextButton = document.getElementById('next');

/*Get the indicators div where we will create ul and li Elements inside it by javascript 
then each li will contain a number represent the slide number */
let indicators = document.getElementById('indicators');





/*************************    Creating Ul and li Elements inside it , each li contains text which is num of slide  ********************/

// create ul element
let indicatorsCreatedUl = document.createElement('ul');
// set id to the ul
indicatorsCreatedUl.setAttribute('id' , 'indicators-Ul');


// for loop to create li elements = slides number (slides count)
for( let i=0 ; i < slidesCount ; i++){

    //create li element
    let indicatorLi = document.createElement('li');

    /* Set data attribute for li which is called "data-index" because i will put it's value 
    (which will be 1, 2, 3, 4, 5 ) in the index of the sliderImages Array which is (slidesCount) */
    indicatorLi.setAttribute('data-index' , i);
    // Create and append text to li
    indicatorLi.appendChild(document.createTextNode(i+1));

    // append li to ul
    indicatorsCreatedUl.appendChild(indicatorLi);

}



// append the created ul to the div element which ul should be inside it
indicators.appendChild(indicatorsCreatedUl);


/*************************************        Get the created ul and li from HTML   ***********************************************/

// Get the created appended ul from Html
let indicatorsUl = document.getElementById('indicators-Ul');

// Get the created appended li from Html
let allIndicatorsLiElements = Array.from(document.querySelectorAll('#indicators-Ul li'));


/******************************************                          Start Functions                     *************************/
/******************************************   when click on any indicator slide num which inside the li   *************************/

/* loop on indicators so when user click on any of slide num Bullets so first remove active class from all slide images 
and from all slide bullets , secondly add active class on the clicked Bullet (li) Only 
thirdly  add active class on the coressponding image (slide) Only 
fourthly update the textContent of the Label  */

allIndicatorsLiElements.forEach(indicator =>{

    indicator.addEventListener('click' , ()=>{

      currentSlideNum = parseInt(indicator.getAttribute('data-index'));

      theChecker();

    });

});

// Trigger The Checker Function
theChecker();

function theChecker(){
   
  // call the removeAllActive function 
  removeAllActive();

  allIndicatorsLiElements[currentSlideNum].classList.add('active');
  sliderImages[currentSlideNum].classList.add('active');
  slideLabelNum.textContent = "slide # " + (currentSlideNum + 1) + " of " + slidesCount;

  if(currentSlideNum == 0){
    prevButton.classList.add('disabled');
  }else{
    prevButton.classList.remove('disabled');
  }


  if(currentSlideNum == slidesCount-1){
    nextButton.classList.add('disabled');
  }else{
    nextButton.classList.remove('disabled');
  }

}

function removeAllActive(){

    // loop on allIndicatorsLiElements Array (all li Elements)  to remove the class active
    allIndicatorsLiElements.forEach(indicator =>{
        indicator.classList.remove('active');
    });

     // loop on (sliderImages Array )all images (all li Elements) to remove the class active
    sliderImages.forEach(image =>{
        image.classList.remove('active');
    });
}

/*******************************************          next Button and previous Button functions        ******************************/


prevButton.onclick = prevSlide;

// when user click on prevButton 
function prevSlide (){
    if(prevButton.classList.contains("disabled")){

        // DO Nothing
        return false;

    }else{

        currentSlideNum--;
        theChecker();
    }
 
}




nextButton.onclick = nextSlide;

function nextSlide (){
    if(nextButton.classList.contains('disabled')){

        //Do Nothing
        return false;
    }else{
        currentSlideNum++;
        theChecker();
    }
}


