// 1. start vs stop count time
const btnStartTimeCount = document.querySelector(".clock__count");
let timeSecondCurr = 0;
let timeMinuteCurr = 0;
let timeOfSelectionS = 0;
let timeOfSelectionM = 0;
let valueTime = 0;
let index = 0;
let value = "break";
let index3 = 0;
btnStartTimeCount.addEventListener("click", handleStartOrStop);
function handleStartOrStop(e){
    // change text 
    // 20:00
    // 1:00
    if (e.target.matches(".clock__count"))
    {   
        
        const textTime = e.target.querySelector(".time__count-btnstart");
        const value = textTime.innerHTML;
        
        if(value === "Start"){
            textTime.innerHTML = "Pause";
            countTimeft();
            return;
        }
        if(value === "Pause"){

            textTime.innerHTML = "Start";
            return;
        }
    }
    
}
function countTimeft(){
    const textTime = document.querySelector(".time__count-btnstart");
    if(textTime.innerHTML=="Start"){
        clearTimeout(count)
        return;
    }
    if(value == "pause"){
        clearTimeout(count);
        countTimes();
        return;
    }
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
    console.log(value) 
    
    if(timeSecond.innerHTML <= 0 && timeMinute.innerHTML <=0){
       
        if(value=="break"){
            textTime.style = "display:none"; 
            timeSecond.innerHTML = "03";
            timeMinute.innerHTML = "00";
            value = "run";    
        }
        else if(value =="run"){
            textTime.style = "display: block";
            changeSelection();
            if(index == 0){
                timeSecond.innerHTML = "00";
                timeMinute.innerHTML = "20";
            }
            if(index == 1){
                timeSecond.innerHTML = "00";
                timeMinute.innerHTML = "05";
            }
            if(index == 2){
                timeSecond.innerHTML = "00";
                timeMinute.innerHTML = "15";
            }
        }
    }
    var count = setTimeout(countTimeft, 1000);
}
function changeSelection(){
    const selections = document.querySelectorAll(".time__selection");
    index++;
    value = "break";
    if(index < 3){
        [...selections].forEach(item => item.classList.remove("time__selection--active"));
        [...selections][index].classList.add("time__selection--active");
        // set pomodoro time
    };
    if(index == 3)
    {   
        index = 0;
        value = "pause";
        [...selections].forEach(item => item.classList.remove("time__selection--active"));
        [...selections][index].classList.add("time__selection--active");
    };
};
function countTimes(){
    const circles = document.querySelectorAll(".circle");
    if(index3 < 4){
        [...circles][index3].classList.add("circle--active");
        index3++;
        // set pomodoro time
    };
    if(index3 == 4)
    {   
        index3= 0;
        [...circles].forEach(item => item.classList.remove("circle--active"));
    };
}
// 2. selections 
// 3. công thức vòng lặp
// 4. chọn số lượng vòng lặp
// 5. lưu thời gian đã học được
// 6. công thức cộng poin
