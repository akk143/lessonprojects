// const inputs = document.querySelectorAll("input");

// let datas =[];

// inputs.forEach(function(input){

    // input.addEventListener('keyup',function(){

    //     datas.push({
    //         digit:inputs[0].value,
    //         name:inputs[1].value,
    //         exp:inputs[2].value,
    //         ccv:inputs[3].value,
    
    //     });

    //     console.log(datas[datas.length-1]);

    // });


// });


const inputs = document.querySelectorAll("input");
let datas = [];

inputs.forEach(function(input){

    input.addEventListener('input',function(){

        let inputdata = {};
        inputs.forEach(function(input){

            inputdata[input.name] = input.value;

        });

        datas.unshift(inputdata);
        console.log(datas[0]); 

    });

});

console.log(datas);
