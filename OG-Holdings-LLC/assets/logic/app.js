$(function() {
   $("header").hide().slideDown(3000) 

// ===============================================
   // banner slideshow
// ===============================================
   let slideIndex = 0;
   let images = [
      "./assets/images/photo-background-1.jpg", 
      "./assets/images/photo-background-2.jpg", 
      // "./assets/images/photo-background-3.jpg", 
      "./assets/images/photo-background-4.jpg", 
      "./assets/images/photo-background-5.jpg"
   ];
   let slideshow = $("#banner-img");
   
   let playSlides = () => {
      let scroll = images.map(i => i);
      scroll.forEach(element => {
         slideshow.empty();
         let imgs = $("<img>").attr("src", element).addClass("slides");
         imgs.appendTo(slideshow);
      });
      slideIndex++;
      if (slideIndex > images.length) {
         slideIndex = 1;         
      }
      let slides = $("<img>").attr("src", images[slideIndex-1]).addClass("slides2");
        //  let slides = $("<img>").attr("src", images[slideIndex-1]).css("display", "block");

      slides.appendTo(slideshow);
          setTimeout(playSlides, 30000); // Change image every 30 seconds

         }
      playSlides();

// =============================
// InfoBox
// ==================

   let expand = () => {
      let selector = $(".bubble");
      selector.mouseover = bubble;
      
   }
      let bubble = () => {
         let view = $("<div>").attr().addClass("bubble")
      }
   expand()
});