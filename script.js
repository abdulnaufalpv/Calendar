const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    const calendarTable = document.getElementById('calendarTable').getElementsByTagName('tbody')[0];
    calendarTable.innerHTML = '';
    const monthYear = document.getElementById('monthYear');
    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        let cell = document.createElement('td');
        row.appendChild(cell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (row.children.length === 7) {
            calendarTable.appendChild(row);
            row = document.createElement('tr');
        }
        let cell = document.createElement('td');
        cell.textContent = day;
        if (day === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
            cell.classList.add('today');
        }
        row.appendChild(cell);
    }
    calendarTable.appendChild(row);
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

function updateCurrentDate() {
    const now = new Date();
    const currentDateElement = document.getElementById('currentDate');
    currentDateElement.textContent = `Today: ${now.toDateString()} ${now.toLocaleTimeString()}`;
}

setInterval(updateCurrentDate, 1000);
renderCalendar();
updateCurrentDate();