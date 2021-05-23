// Variables //

var root = 16;
var pixel = 0;
var rem = 0;


// Return values //

var valuepixel = $("#input-px").val()


$("#button-copy-1").click(function() {
    console.log(valuepixel)
})

// Calculate //

var rem_calculate = (pixel / root);
var pixel_calculate = (root / rem);


// Adding changes //

$("#input-px").on('input', function(){
    $("#input-rem").val("25")
})

