
// gets number of days in month
const getDaysNumInMonth = (dateCurrent) => {
    var tmp = new Date(dateCurrent.getFullYear(), date.getMonth() + 1, 0);
    return tmp.getDate();
};

// navigate with arrows
document.getElementById('buttons').addEventListener('click', function (evt) {
    var target = evt.target;
    var d = new Date();
    if (target.id === 'monthNext') {
        if (currentMonthDigit >= 11) {
            currentMonthDigit = -1;
        }
        currentMonthDigit = currentMonthDigit + 1;
        d.setMonth(currentMonthDigit);
        renderMonth(d);
        var output = monthNames[currentMonthDigit];
        document.getElementById("getMonth").innerHTML = output;
    } else if (target.id === 'monthPrevious') {
        if (currentMonthDigit <= 0) {
            currentMonthDigit = 12;
        }
        currentMonthDigit = currentMonthDigit - 1;
        d.setMonth(currentMonthDigit);
        renderMonth(d);
        var output = monthNames[currentMonthDigit];
        document.getElementById("getMonth").innerHTML = output;
    }

}, false);


const renderDays = (daysNumber, calendarGrid) => {
    for(var dayCounter = 1; dayCounter <= daysNumber; dayCounter++){
        var newDay = document.createElement('section');
        newDay.className = 'calendar__day';
        newDay.innerText = dayCounter;
        calendarGrid.appendChild(newDay);
    }
};

const clearGrid = (grid) => {
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
};

const renderGridOffset = (grid, offset) => {
    for(var dayCounter = 0; dayCounter <= offset; dayCounter++){
        var newDay = document.createElement('section');
        newDay.className = 'calendar__day_disabled';
        grid.appendChild(newDay);
    }
};

const renderMonth = (dateCurrent) => {
    const daysNumber = getDaysNumInMonth(dateCurrent); // count number of days in month
    const calendarGrid = document.getElementById('calendar-grid');
    clearGrid(calendarGrid); // clear Calendar cells
    console.log(dateCurrent.getDay());
    renderGridOffset(calendarGrid, dateCurrent.getDay() + 2); // indicate the number of empty cells depends of weekday
    renderDays(daysNumber, calendarGrid);

}

// gets current date
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var date = new Date();
var currentMonthDigit = date.getMonth();
date.setMonth(currentMonthDigit);
renderMonth(date);
var output = monthNames[currentMonthDigit];
document.getElementById("getMonth").innerHTML = output;
