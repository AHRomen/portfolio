$(document).ready(function(){
  window.addEventListener("scroll",function(){
    var headers= document.querySelector("nav");
    headers.classList.toggle("sticky", window.scrollY > 100);
  });
    AOS.init({
      offset: 0 , // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 3000
    });
    $(".nav-button").click(function(){
      if($(".nav-button").attr("aria-expanded") === "true"){
        $(".lines").addClass("nline");
        
      }
      else{
        $(".lines").removeClass("nline");   
           
      }
    });

    var mixer = mixitup('.port_pic');

  })
