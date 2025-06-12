function romano() 
{
const romano = [4];
const romanosnumeros = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M"];
var numeros = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000];
var i; 
var numero = document.getElementById('numero').value;
var n = 0 ;
var conteudo  = "";
if (numero<=1000) {
for (i = 27; i>=0; i--) {
       if (numero>=numeros[i]){
           numero -= numeros[i];
           romano[n] = romanosnumeros[i];
           n++;
       }
   }
if (n==1){
conteudo += romano[0] ;
document.getElementById ("display").innerHTML = conteudo ;
}
if (n==2) {
conteudo += romano[0] + romano[1] ;
document.getElementById ("display").innerHTML = conteudo ;
   }
if (n==3) {
conteudo += romano[0] + romano[1] + romano[2] ;
document.getElementById ("display").innerHTML = conteudo ;
   }

   }
}