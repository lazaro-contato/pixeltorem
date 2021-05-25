
/* Math methodes
var rem_calculate = (pixel / root);
var pixel_calculate = (root * rem);
*/

// Variables //

var root = 16;
var pixel = 0;
var rem = 0;



// ========== CHANGING INPUT REM ========== //

$("#input-px").keyup(function(){
    var valuePixel = Number($(this).val());
    var finalNumber = (valuePixel / root).toFixed(3);
    finalNumber = checkDecimal(finalNumber)

    $("#input-rem").val(finalNumber);

    if (!$(this).val()){
        $("#input-rem").val("");
    }

    
})

// ========== CHANGING INPUT PX ========== //

$("#input-rem").keyup(function(){
    root = $("#input-root").val();

    var valueRem = $(this).val();
    var finalNumber = (root * valueRem).toFixed(2);

    finalNumber = checkDecimal(finalNumber);
    
    $("#input-px").val(finalNumber);

    if (!$(this).val()){
        $("#input-px").val("");
    }

    var valueRem = $("#input-rem").val();
    $("#input-px").val(finalNumber);

    if(!valueRem){
        $("#input-px").val("");
    };

})

// ========== CHANGING THE ROOT ========== //

$("#input-root").keyup(function(){
        root = $(this).val();

        var valueRem = $("#input-rem").val();
        var finalNumber = (root * valueRem).toFixed(2);

        finalNumber = checkDecimal(finalNumber);

        $("#input-px").val(finalNumber);

        if(!root || !$("#input-rem").val()){
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

 
function checkDecimal(num){
    var numPart = num.split(".")

    if (numPart[1] == "00" || numPart[1] == "000"){
        return numPart[0]
    } else {
        return num
    }
}



