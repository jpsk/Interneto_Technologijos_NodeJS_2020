let count = 0;

// Imituoja ilgai trunkančią operaciją
function workForALongTime(time){
    const start = new Date().getTime();
    while(new Date().getTime() < start + time){}
}

function countSeconds(){
    workForALongTime(2000);
    count++;
    console.log('count' + count);
}

setInterval(countSeconds, 1000);
