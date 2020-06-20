'use strict'

let total=0;

$("#guardar").click(function guardadora(){
    localStorage.setItem($("#nombrador").val()+(localStorage.length+1), $("#apreciador").val());
    $("ul").append("<li id="+$("#nombrador").val()+(localStorage.length+1)+">"+$("#nombrador").val()+": $"+$("#apreciador").val()+".<input type='radio' id="+localStorage.length+"> </li>");
    total=total+parseFloat($("#apreciador").val());
    $("p").html("Total: $"+total);
});

$("#eliminar").click(function eliminadora(){
    total=total-parseFloat(localStorage.getItem($("#nombrador").val()))
    $("p").html("Total: $"+total);
    console.log(parseFloat(localStorage.getItem($("#nombrador").val())))
    for(let i=0; i<localStorage.length; i++){
        if($("#"+i).is(':checked')){
            localStorage.removeItem($("#nombrador").val()+i);
            $("li").remove("#"+$("#nombrador").val()+i);
        }
        total+=parseFloat(localStorage.getItem($("#nombrador").val()+i))
    }
});

$("#limpiar").click(function limpiadora(){
    localStorage.clear();
    $("ul").html("")
    total=0;
    $("p").html("")
});