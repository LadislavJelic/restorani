$(document).ready(function(){
	$(".wrapper-language").parent().css({
		"padding": "0"
	});
	$(".link-social-icons").parent().css({
		"padding": "2.5px",
		
	});
  $(".main-h2-in-site").parent().css({
    "padding-left":"0"
  });

  

	
  var owl = $("#owl-demo");
       
        owl.owlCarousel({
           
            itemsCustom : [
              [0, 1],
              [450, 2],
              [600, 2],
              [700, 3],
              [1000, 4],
              [1200, 4],
              [1400, 4],
              [1600, 4]
            ],
            navigation : true
       
  });

  var owl = $("#owl-demo2");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 3],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true
       
  });

  var owl = $("#owl-demo3");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 3],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true
       
  });

  var owl = $("#owl-demo5");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 3],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true
       
  });

  $(".searchPicture").on("click",function(){
    $(".seach-box").fadeToggle(300);
  });

  $(".arrow-down-restorani-first").on("click",function(){
    $(".drowdownMenu-restorani-Main").slideToggle(300,function(){
      $(".arrow-down-restorani-first").toggleClass("rotate");
    });
  });

  $(".arrow-down-restorani-second").on("click",function(){
    $(".drowdown-menu-karticeZaPopuste").slideToggle(300,function(){
      $(".arrow-down-restorani-second").toggleClass("rotate");
    });
  });

  $(".wrapper-language div").on("click",function(){
    $(this).siblings().toggle();
  });

  $(".hamburger-menu").on("click",function(){
    $(".main-navigation-bar").slideToggle(300);
  });

  $(".hamburger-menu1").on("click",function(){
    $(".big-links").fadeToggle(300);
  })


   

});



var expanded = false;
    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }

    function showCheckboxes1() {
        var checkboxes = document.getElementById("checkboxes1");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }

