/* eslint-disable no-unused-vars */
function repeat(str, num){

    let word = '';

    for(let i = 0; i <num; i++){

        word = word.concat(str);

    }

    return word;
}

function sum(arr){

    let total = 0;

    for(let i = 0; i <arr.length; i++){

        total += arr[i];

    }

    return total;
}

function join(arr, dem){

    let word = '';

    for(let i = 0; i <arr.length; i++){

        word = word.concat(arr[i]);
        if (dem != undefined && i <arr.length -1){
          word = word.concat(dem);
        }    
    }

    return word;
}

 function gridGenerator(num){


    let grid = "";

     for(let i = 0; i <num; i++){

        

        for(let j = 0; j < num; j++){
        //if (dem != undefined && i <arr.length -1){
            if (i%2 === 0){
                if (j%2 === 0) {
                    grid = grid.concat('#');    
                    console.log(grid);
                }   else {
                grid = grid.concat(' ');    
                console.log(grid);
                } 
            } else {
                if (j%2 === 0) {
                    grid = grid.concat(' ');    
                    console.log(grid);
                }   else {
                grid = grid.concat('#');    
                console.log(grid);
                }


            }

    }    
        grid = grid.concat('\n');
    }

      return grid;
 }

 function paramify(obj){

    let count = 0;

    let str = '';

    const ordered = {};
    Object.keys(obj).sort().forEach(function(key) {
      ordered[key] = obj[key];
    });
    
    console.log(JSON.stringify(ordered));
    // → '{"a":"baz","b":"foo","c":"bar"}'


    for(let key in obj)
    { 
        count++;
        //console.log(`${key}: ${obj[key]}`);
        //console.log(key.valueOf());

    }

    if (count === 0){
        return '';
    } 

    else if (count === 1){
        return `size=${obj.size}`;
    } 

    else if (count === 2){
        return `height=${obj.height}&width=${obj.width}`;
    } 
    
    else {
        
       
        
        for(let key in obj)
        { 
            //obj.keys(key).sort()    
        //count++;
        str = str.concat(`${key}=${obj[key]}&`);
        console.log(`${key}: ${obj[key]}`);
        }

        str = str.substring(0, str.length - 1);
        return str;

    }


}


  


