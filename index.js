$('.one').on('click',function(){
    $("#collapseOne").toggleClass("show");
    if ($("#collapseOne").hasClass("show")){
        $("#addHere1").html("_");
    } 
    else{
        $("#addHere1").html("+");
    }
    $("#collapseTwo").removeClass("show");
    $("#collapseThree").removeClass("show");
})

$(".two").on("click", function () {
  $("#collapseTwo").toggleClass("show");
  if ($("#collapseTwo").hasClass("show")) {
    $("#addHere2").html("_");
  } else {
    $("#addHere2").html("+");
  }
  $("#collapseOne").removeClass("show");
  $("#collapseThree").removeClass("show");
});

$(".three").on("click", function () {
  $("#collapseThree").toggleClass("show");
  if ($("#collapseThree").hasClass("show")) {
    $("#addHere3").html("_");
  } else {
    $("#addHere3").html("+");
  }
  $("#collapseOne").removeClass("show");
  $("#collapseTwo").removeClass("show");
});
