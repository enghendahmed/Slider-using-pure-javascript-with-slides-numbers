# Slider-using-pure-javascript-with-slides-numbers
## It is a pure javascript Slider with numbers of slides . 
#### this slider has some features like :
       - CSS3 smoothly transition (Fade).
       - HTML5 (SEO optimised).
       - Left / Right Navigation.
       - Bullet navigation.
#### when user click on any number , so the coressponding slide image will be displayed .
#### the ul (Unordered List) of numbers are the slides numbers . this ul is created and also appended to the HTML page by vanilla javascript.


#### nextButton:
##### it removes active class from all li elements (all slider images) , and adds active class only to the next slide image (which is next to the current image).
#### prevButton:
##### it removes active class from all li elements (all slider images) , and adds active class only to the previous slide image (which is previous to the current image).
#### the Checker function :
##### (which indicates the Slide Number and it acts as a button) has some responsabilities: 
      1- it removes active class from all li elements (all slider images) , and adds active class only to the selected
         slide image (which the user click it's number). 
      2- it changes the slideNumberLabel also . 
      3- it checks if this slide image is the last one so slideIndicator will make the nextButton Disabled
          by adding a disabled class on nextButton , the same as if this slide image is the first one so slideIndicator 
          will make the prevButton Disabled by adding a disabled class on prevButton .
         

          
![Screenshot 2022-08-01 at 23-41-46 Javascript Image Slider with CSS3 Transition Fade Effect Hend Ahmed](https://user-images.githubusercontent.com/97601640/183455566-f5375275-4db8-4bf1-b622-c9e48a495a1f.png)
