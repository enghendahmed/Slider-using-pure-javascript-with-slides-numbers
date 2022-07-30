# Slider-using-pure-javascript-with-slides-numbers
## It is a pure javascript Slider with numbers of slides .
### when user click on any number , so the coressponding slide image will be displayed .
### the ul (Unordered List) of numbers are the slides numbers . this ul is created and also appended to the HTML page by vanilla javascript.


## nextButton :
### it removes active class from all li elements (all slider images) , and adds active class only to the next slide image (which is next to the current image).
## prevButton :
### it removes active class from all li elements (all slider images) , and adds active class only to the previous slide image (which is previous to the current image).
## slideIndicator :
### (which indicates the Slide Number and it acts as a button). Firstly , slideIndicator removes active class from all li elements (all slider images) , and adds active class only to the selected slide image (which the user click it's number). secondly , slideIndicator changes the slideNumberLabel also . thirdly , slideIndicator checks if this slide image is the last one so slideIndicator will make the nextButton Disabled by adding a disabled class on nextButton , the same as if this slide image is the first one so slideIndicator will make the prevButton Disabled by adding a disabled class on prevButton

