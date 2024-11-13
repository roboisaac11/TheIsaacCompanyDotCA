
const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];


// Function to handle changes in date input or checkbox
function handleInputChange(inputElement) {
    const listItem = inputElement.closest('li'); // Get the parent li
    const elementID = listItem.querySelector('input[type="radio"]').id;

    const isChecked = listItem.querySelector('input[type="radio"]').checked;
    const startDate = listItem.querySelector('.section1 input[type="date"]').value;
    const endDate = listItem.querySelector('.section2 input[type="date"]').value;
    const daySix = listItem.querySelector('.section1 input[type="checkbox"]').checked;
    const today = listItem.querySelector('.section3 input[type="checkbox"]').checked;

    // console.log('List Item Info:');
    // console.log('Is selected', isChecked);
    // console.log('Start date:', startDate);
    // console.log('End date:', endDate);
    // console.log('Skip day six:', daySix);
    // console.log('Start today:', today);

    if ((startDate != "" || today) && endDate != "" && isChecked) {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        
        const startMonth = monthNames[startDateObj.getMonth()]
        const endMonth = monthNames[endDateObj.getMonth()]
        const startDay = startDateObj.getDate()
        const endDay = endDateObj.getDate()

        var days = get_school_days(startMonth, startDay, endMonth, endDay, daySix);

        document.getElementById("days-between").innerHTML = days;
    }

    data[elementID] = {
        "startDate": startDate,
        "endDate": endDate,
        "daySix": daySix,
        "today": today
    };

    save();
}

// Set the current date for all existing date inputs on page load
window.onload = function() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the date changes
        });
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the checkbox changes
        });
    });

    const radioboxes = document.querySelectorAll('input[type="radio"]');
    radioboxes.forEach(radiobox => {
        radiobox.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the checkbox changes
        });
    });

    document.getElementById("create").addEventListener("click", function() {
        createNewListItem();
    });

};