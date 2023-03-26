$(document).ready(function(){
    
    AOS.init({
      offset: 500 , // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 3000
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