const getcurrentmonth = document.getElementById('curmonth');
const getcurrentyear = document.getElementById('curyear');
const getuimonths = document.getElementById('months');
const getuiyears = document.getElementById('years');
const getcaldays = document.getElementById('caldays');
const getmonthbtn = document.querySelector('.month-btn');
const getyearbtn = document.querySelector('.year-btn');


const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
let startyear = 2020;
let endyear = 2030;

let month,year;

window.addEventListener("load",function(){

    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    getcurrentmonth.textContent = months[month];
    getcurrentyear.textContent = year;

    initmonths();
    inityears();
    initdays();

});


function initmonths(){

    getuimonths.innerHTML = "";

    for(let x = 0; x < months.length; x++){

        const newdiv = document.createElement("div");
        newdiv.textContent = months[x];
        newdiv.classList.add("dropdown-item");

        newdiv.onclick = updateprogress(x);

        getuimonths.appendChild(newdiv);
    }
}

function updateprogress(idx){

    let selectmonth = idx;

    return function(){
        month = selectmonth;

        getcurrentmonth.textContent = months[month];
        initdays();
    }
}

function inityears(){

    getuiyears.innerHTML = "";

    for(let x = startyear; x <= endyear; x++){

        const newdiv = document.createElement("div");
        newdiv.textContent = x;
        newdiv.classList.add("dropdown-item");

        newdiv.onclick = (function(){

            let selectyear = x;

            return function(){
                year = selectyear;
                getcurrentyear.textContent = year;
                initdays();
            }
        }());

        getuiyears.appendChild(newdiv);

    }
}

function initdays(){

    getcaldays.innerHTML = "";

    let tmpdays = new Date(year,month,0);

    let getalldays = alldays(year,month);

    let getprevendday = tmpdays.getDay();

        for(let x = 0; x <= getprevendday; x++){

            let newlabel = document.createElement("label");
            newlabel.className = "day blank";

            getcaldays.appendChild(newlabel);
        }

        for(let y = 0; y < getalldays; y++){

            let eachday = y+1;

            let newlabel = document.createElement("label");
            newlabel.textContent = eachday;
            newlabel.classList.add("day");

            getcaldays.appendChild(newlabel);
        }

}

function alldays(year,month){

    let curalldays = new Date(year,month+1,0);
    curalldays = curalldays.getDate();
    return curalldays;
}
