// 1. start vs stop count time
const btnStartTimeCount = document.querySelector(".clock__count");
let timeSecondCurr = 0;
let timeMinuteCurr = 0;
let timeOfSelectionS = 0;
let timeOfSelectionM = 0;
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
        textTime.innerHTML = "Pause"; 
        timeSecond.innerHTML = "03";
        timeMinute.innerHTML = "00";
        const selection = document.querySelector(".time__selection--active");

        if(selection.matches(".time__selection--end")){
            selection.classList.remove("time__selection--active");
            const selectionBegin = document.querySelector(".time__selection--begin");
            selectionBegin.classList.add("time__selection--active");
        } else {
            changeSelection();
        }
    }
    var count = setTimeout(countTimeft, 1000);
}
function changeSelection(){
    const selection = document.querySelector(".time__selection--active");
    if(selection.matches("#pomodoro")){
        timeOfSelectionM = 20;
        timeOfSelectionS = 00; 
        const timeMinute = document.querySelector("#minute");
        const timeSecond = document.querySelector("#second");
        timeSecond.innerHTML = timeOfSelectionS;
        timeMinute.innerHTML = timeOfSelectionM;
    }
    if(selection.matches(".time__selection")){
        selection.classList.remove("time__selection--active");
        selection.nextElementSibling.classList.add("time__selection--active");
    }
}
// 2. selections 
// 3. công thức vòng lặp
// 4. chọn số lượng vòng lặp
// 5. lưu thời gian đã học được
// 6. công thức cộng poin
