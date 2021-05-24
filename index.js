// Variables //

var root = 16;
var pixel = 0;
var rem = 0;


// ========== CHANGING THE ROOT ========== //

$("#input-root").keyup(function(){
    root = Number($(this).val());

    var valueRem = Number($("#input-rem").val());
    $("#input-px").val(root * valueRem);
})



// ========== CHANGING INPUT REM ========== //

$("#input-px").keyup(function(){
    var valuepixel = Number($(this).val());
    $("#input-rem").val(valuepixel / root);

    if (!$(this).val()){
        $("#input-rem").val("")
    }

    
})

// ========== CHANGING INPUT PX ========== //

$("#input-rem").keyup(function(){
    var valueRem = Number($(this).val());
    $("#input-px").val(root / valueRem);

    if (!$(this).val()){
        $("#input-px").val("")
    }

})


// ========== COPY WITH BUTTON ========== //

$("#button-copy-1").click(function(){
    $("#input-px").select()
    document.execCommand('copy');
})

$("#button-copy-2").click(function(){
    $("#input-rem").select()
    document.execCommand('copy');
})

/*
var rem_calculate = (pixel / root);
var pixel_calculate = (root / rem);
*/


