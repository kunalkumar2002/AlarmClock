const alarmList = [];
let date = new Date();
let currhour = date.getHours();
let currMin = date.getMinutes();
let currSec = date.getSeconds();

const list = document.getElementById('lap-list');
const massage = document.getElementById('extra-message');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
let alarmSound = new Audio("alarm-clock-short-6402.mp3")



// console.log(currhour + " " + currMin + " " + currSec)


function triggerAlarm(task){
    // console.log(task);
    
    alarmSound.play();
    setTimeout(()=>{
        deleteTask(task.id)
    },5000)
}

let updateElement = (element, data) => {
    let htmlElement = document.getElementById(element);
    //rendering element, if value of data is 2 digit number then render it directly
    if(data > 9)
        htmlElement.innerText = data;
    
    else
        htmlElement.innerText = "0" + data;
    
}  

updateElement('hr', currhour);
updateElement('min', currMin);
updateElement('sec', currSec);

let hrInfo = parseInt(document.getElementById("hr").innerText);
let minInfo = parseInt(document.getElementById("min").innerText);
let secInfo = parseInt(document.getElementById("sec").innerText); 
    
let currentlyRunningAlarmId = null;    
let intervalId;
let startClock = () => {
    intervalId = setInterval(() => {
        secInfo ++;
        
        if(secInfo == 60){
            secInfo = 0;
            minInfo ++;
        }
        if(minInfo == 60){
            minInfo = 0;
            hrInfo ++;
        }
        updateElement("sec", secInfo);
        updateElement("min", minInfo);
        updateElement("hr", hrInfo);
        
        const currentTime = `${hrInfo}:${minInfo}`;
        const matchingAlarm = alarmList.find(function (task) {
        return `${task.hours}:${task.minutes}` === currentTime;
    });

    if (matchingAlarm) {
      triggerAlarm(matchingAlarm);
      currentlyRunningAlarmId = matchingAlarm.id;
    }


    }, 1000);
}
startClock();



function addAlarmToDom(task){
    const li = document.createElement('li');
    li.innerHTML= `
    <span>${task.hours} : ${task.minutes}</span>
    <img src="icons8-trash-can-50.png" class="delete" data-id="${task.id}" />
    `;
    list.append(li);
}


function renderList(){
    list.innerHTML = '';
    for(let i = 0 ; i < alarmList.length ; i++){
        addAlarmToDom(alarmList[i]);
    }
}


function addAlarm(task){
    if(task){
        alarmList.push(task);
        renderList();
        showNotification('Alarm added successfully');
        return ;
    }
    showNotification('Alarm is not added try again');
}

//DELETE ALARM

function deleteTask(alarmId){
    const newtask = alarmList.filter(function(task){
        return task.id !== alarmId;
    });
    alarmList.length = 0;
    for(let i in newtask){
        alarmList.push(newtask[i]);
    }
    renderList();
    alarmSound.pause();
    showNotification('Alarm deletad successfully');
}

function handleAddButtonClick(e){
    const target = e.target;
    if(target.className === 'btn'){
        
        const hours = parseInt(hoursInput.value);
        const minutes = parseInt(minutesInput.value);
        
        if (isNaN(hours) || hours < 0 || hours > 23 || isNaN(minutes) || minutes < 0 || minutes > 59) {
            showNotification('Please enter valid hours and minutes.');
            return;
        }
        
        const task = {
            hours: hours,
            minutes: minutes,
            id: Date.now().toString(),
            done: false
        };
        
        hoursInput.value = '';
        minutesInput.value = '';
        addAlarm(task);
        // console.log('Task added:', task);
    }

    if(target.className === 'delete'){
        const taskId = target.dataset.id;
        // console.log(taskId);
        deleteTask(taskId);
        return ;
    }

}


function showNotification(text){
    massage.innerHTML = `${text}`;
    setTimeout(() => {
        massage.innerHTML = '';
    }, 2000);
    
}


// const setButton = document.getElementById('ADD');
document.addEventListener('click', handleAddButtonClick);

