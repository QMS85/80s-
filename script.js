// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const dateString = `${day}/${month}/${year}`;
    
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to display the clock immediately

// Variables for the calendar
const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

const monthYear = document.getElementById('month-year');
const datesContainer = document.getElementById('dates');

// Function to render the calendar
function renderCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    monthYear.textContent = `${monthNames[month]} ${year}`;
    
    datesContainer.innerHTML = '';
    for (let i = 0; i < firstDay; i++) {
        datesContainer.innerHTML += '<div></div>';
    }
    for (let i = 1; i <= daysInMonth; i++) {
        datesContainer.innerHTML += `<div>${i}</div>`;
    }
}

// Event listeners for the calendar navigation buttons
document.getElementById('prev').addEventListener('click', () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    renderCalendar(month, year);
});

document.getElementById('next').addEventListener('click', () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    renderCalendar(month, year);
});

// Initial call to render the calendar
renderCalendar(month, year);
