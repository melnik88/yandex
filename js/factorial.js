/**
 * Created with JetBrains PhpStorm.
 * User: Egor
 * Date: 06.08.13
 * Time: 23:17
 * To change this template use File | Settings | File Templates.
 */

/*jslint plusplus: true */
/*global console */

var myArray = [4, 0, 5, 8, 5];


/*вычисляем факториал 1 числа
* @param n - число, факториал которого вычисляем
*/
function factorial(n) {
  return n ? n*factorial(n-1) : 1;
}

/*вычисляем сумму факториалов чисел, входящих в массив
*@param arr - массив, чисел, сумму факториалов которых надо вычислить
* */
function factorialFromArray(arr){
    var result=0;
    for(i=0; i<arr.length;i++){
    result+=factorial(arr[i]);
    }
    return result;
}

function init(){
document.getElementById("log").innerHTML = factorialFromArray(myArray);
}

console.log(factorialFromArray(myArray));
window.onload = init();
