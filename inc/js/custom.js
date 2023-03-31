$(document).ready(function(){
    
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
    $(".js-sticknav").waypoint(function(direction){
      if (direction=="down") {
        $("nav").addClass("sticky");
      } 	
      else{
        $("nav").removeClass("sticky");
      }
    });

    var mixer = mixitup('.port_pic');

  })
