
/* Math Mathodes
var rem_calculate = (pixel / root);
var pixel_calculate = (root / rem);
*/

// Variables //

var root = 16;
var pixel = 0;
var rem = 0;



// ========== CHANGING INPUT REM ========== //

$("#input-px").keyup(function(){
    var valuepixel = Number($(this).val());
    $("#input-rem").val((valuepixel / root).toFixed(3));

    if (!$(this).val()){
        $("#input-rem").val("");
    }

    
})

// ========== CHANGING INPUT PX ========== //

$("#input-rem").keyup(function(){
    var valueRem = Number($(this).val());
    $("#input-px").val((root / valueRem).toFixed(2));

    if (!$(this).val()){
        $("#input-px").val("");
    }

    var valueRem = Number($("#input-rem").val());
    $("#input-px").val((root * valueRem).toFixed(2));

    if(!valueRem){
        $("#input-px").val("");
    };

})

// ========== CHANGING THE ROOT ========== //

$("#input-root").keyup(function(){
        root = Number($(this).val());
        var valueRem = Number($("#input-rem").val());
        $("#input-px").val((root * valueRem).toFixed(2));

        if(!root){
            $("#input-px").val("");
        };

})

// ========== COPY WITH BUTTON ========== //

$("#button-copy-1").click(function(){
    $("#input-px").select();
    document.execCommand('copy');
})

$("#button-copy-2").click(function(){
    $("#input-rem").select();
    document.execCommand('copy');
})





