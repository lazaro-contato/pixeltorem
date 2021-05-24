// Variables //

var root = 16;
var pixel = 0;
var rem = 0;


// ========== CHANGING THE ROOT ========== //

$("#input-root").keyup(function(){
    root = Number($(this).val());
})



// ========== CHANGING INPUT REM ========== //

$("#input-px").keyup(function(){
    var valuepixel = Number($(this).val());
    $("#input-rem").val(valuepixel / root);

    
})

// ========== CHANGING INPUT PX ========== //

$("#input-rem").keyup(function(){
    var valueRem = Number($(this).val());
    $("#input-px").val(root / valueRem);
})




var rem_calculate = (pixel / root);
var pixel_calculate = (root / rem);




