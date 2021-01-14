function showRegion(x,y) {
  $(".animal").hide();

  if (x>620 && x<750 && y>294 && y<375) {
    $('#kangaroo').show();
  }
  else if (x>620 && x<750 && y>294 && y<375) {
    $('#lion').show();
  }
  else if (x>430 && x<770 && y>50 && y<150) {
    $('#hamster').show();
  }
  else if (x>200 && x<300 && y>240 && y<400) {
    $('#snake').show();
  }
  else if (x>110 && x<230 && y>160 && y<214) {
    $('#turtle').show();
  }
  else if (x>350 && x<470 && y>180 && y<330) {
    $('#lion').show();
  }
}

$(document).ready(function() {
  $(".animal").hide();
  $(".select>button").click(function(event) {
    $(".animal").hide();
    event.preventDefault();
    $("#"+$(this).attr('class')).show();
  });

  $("#map>img").on("click", function(event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    console.log("X:" + x + "  Y:" + y);
    var nx = (800 * x) / $("#map>img").width();
    var ny = (800 * y) / $("#map>img").width();
    showRegion(nx,ny);
  });

});



/*

$(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        alert("X Coordinate: " + x + " Y Coordinate: " + y);
    });
});

*/