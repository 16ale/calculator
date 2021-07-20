function somar(){
    var a  = 0; 
    var b   = 0; 
    var a1   = 0;
    var b1    = 0;  
    
    a= document.getElementById("A").value;
    b  = document.getElementById("B").value;
    
    a  = parseFloat(a);
    b  = parseFloat(b);
    
    alert (a+b);    
}
function subtrair(){
    var a  = 0; 
    var b   = 0; 
    var a1   = 0;
    var b1    = 0;  
    
    a= document.getElementById("A").value;
    b  = document.getElementById("B").value;
    
   
  
    a  = parseFloat(a);
    b  = parseFloat(b);
    
    alert (a-b);    
}
function multiplicar(){
    var a  = 0; 
    var b   = 0; 
    var a1   = 0;
    var b1    = 0;  
    
    a= document.getElementById("A").value;
    b  = document.getElementById("B").value;
    
    a  = parseFloat(a);
    b  = parseFloat(b);
    
    alert (a*b);    
}
function dividir(){
    var a  = 0; 
    var b   = 0; 
    var a1   = 0;
    var b1    = 0;  
    
    a= document.getElementById("A").value;
    b  = document.getElementById("B").value;
    
    a  = parseFloat(a);
    b  = parseFloat(b);
    
    
    
    alert (a/b);    
}
function funcao(){

var x = event.keyCode;
    
    if (x>=97 && x<=123){
        event.preventDefault();     
    }       
    console.log('você pressionou a tecla:' + x)
}