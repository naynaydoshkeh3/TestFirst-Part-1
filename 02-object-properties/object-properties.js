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

//part two

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

//part 3

function setPropsOnFunc(func) {

    func.year = '20??';

    func.divideByTwo = function(num) {
        
        num = num/2;

        return num;
    }




}

function shallowCopy(arrOne, arrTwo) {


    if (Array.isArray(arrOne))
    {
        const arrMerged = [...arrOne, ...arrTwo];

        return arrMerged;
    }
    else {
        let clone = { ...arrOne, ...arrTwo };

        //clone = Object.assign({}, arrTwo);

        console.log(clone);

        return clone;
    }

}