// 1. start vs stop count time
const btnStartTimeCount = document.querySelector(".clock__count");
let timeSecondCurr = 0;
let timeMinuteCurr = 0;
btnStartTimeCount.addEventListener("click", handleStartOrStop);
function handleStartOrStop(e){
    // change text 
    // 20:00
    // 1:00
    if (e.target.matches(".clock__count"))
    {   
        
        const textTime = e.target.querySelector(".time__count-btnstart")
        const value = textTime.innerHTML;
        if(value === "Start"){
            textTime.innerHTML = "Pause";
            countTimeft();
            return;
        }
        if(value === "Pause"){
            clearTimeout(count)
            textTime.innerHTML = "Start";
            return;
        }
    }
    
}
function countTimeft(){
    const timeMinute = document.querySelector("#minute");
    const timeSecond = document.querySelector("#second");
    
    if(Number(timeSecond.innerHTML) === 0){
        timeMinuteCurr = Number(timeMinute.innerHTML) - 1;
        if(timeMinuteCurr<10){
            timeMinute.innerHTML = `0${timeMinuteCurr}`;
        } else {
            timeMinute.innerHTML =timeMinuteCurr;
        }
        timeSecond.innerHTML = 60;
    }
    timeSecondCurr = Number(timeSecond.innerHTML)-1;
    if(timeSecondCurr<10){
        timeSecond.innerHTML = `0${timeSecondCurr}`;
    } else {
        timeSecond.innerHTML =timeSecondCurr;
    }
    console.log(timeSecondCurr)
    if(timeSecond.innerHTML <= 0 && timeMinute.innerHTML <=0){
        timeSecond.innerHTML = "00";
        timeMinute.innerHTML = "05";
    }
    var count = setTimeout(countTimeft, 1000);
}

// 2. selections 
// 3. công thức vòng lặp
// 4. chọn số lượng vòng lặp
// 5. lưu thời gian đã học được
// 6. công thức cộng poin
