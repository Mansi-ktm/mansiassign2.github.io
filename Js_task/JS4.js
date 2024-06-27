function showDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById('dateDisplay').textContent = formattedDate;
}

// Function to format and display the current time
function showTime() {
    const time = new Date();
    const formattedTime = time.toString();
    document.getElementById('timeDisplay').textContent = formattedTime;
}
