/* eslint-disable no-unused-vars */
function setPropsOnObj(object){

    object.x = 7;
    object.y =  8;

    object.onePlus = function(num) {
        num = num + 1;
        return num;  
      };


}

let obj = {};

setPropsOnObj(obj);

console.log(obj);

function setPropsOnArr(arr){

    arr.hello = function() {
        return "Hello!";
    }

    arr.full = 'stack';

    arr[0] = 5;

    arr.twoTimes = function(num) {
        num = num*2;
        return num;
    }    

}