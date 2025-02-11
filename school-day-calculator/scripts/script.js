// Function to check the radio button inside the clicked <li>
function checkRadioInListItem(li) {
    const radio = li.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
}

// Use event delegation by adding a single event listener to the parent <ul> element
document.getElementById('sortable').addEventListener('click', function (event) {
    // Check if the clicked element is an <li> with draggable="true"
    if (event.target.tagName === 'LI' && event.target.getAttribute('draggable') === 'true') {
        checkRadioInListItem(event.target);
    }
});

function createNewListItem() {
    var id = getNewID();
    // Example: Dynamically create a new list item and add it to the <ul>
    const newLi = document.createElement('li');
    newLi.setAttribute('draggable', 'true');
    newLi.setAttribute('class', 'list-item');
    newLi.innerHTML = `
                    <input type="radio" name="selectedItem" id="`+id+`" checked>
                    <label for="`+id+`">
                        <div class="section1">
                            <h6>Start Date</h6>
                            <input type="date" placeholder="Date">
                        </div>
                        <div class="section2">
                            <h6>End Date</h6>
                            <input type="date" placeholder="Date">
                        </div>
                        <div class="section1">
                            <h6>Ignore Day 3</h6>
                            <input type="checkbox">
                        </div>
                        <div class="section3">
                            <h6>Start on today</h6>
                            <input type="checkbox" class="todayistheday">
                        </div>
                    </label>
                    <span class="trash-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M 5.421 2.467 A 0.5 0.5 0 0 1 6 2 h 4 a 0.5 0.5 0 0 1 0.5 0.5 V 2.99 h 5.5 v 2 H 0 V 3 h 5.405 z M 2 5 h 12 v 9.521 A 2.5 2.5 0 0 1 11.5 17 h -7 A 2.5 2.5 0 0 1 2 14.5 V 5"/>
                        </svg>
                    </span>
    `;
    let dateInputs = newLi.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the date changes
        });
    });

    let checkboxes = newLi.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the checkbox changes
        });
    });

    let radioboxes = newLi.querySelectorAll('input[type="radio"]');
    radioboxes.forEach(radiobox => {
        radiobox.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the checkbox changes
        });
    });

    let trash = newLi.querySelectorAll('.trash-icon');
    trash.forEach(garbage => {
        garbage.addEventListener('click', function() {
            deleteItem(this);
        });
    });

    let today = newLi.querySelectorAll('.todayistheday');
    today.forEach(bruh => {
        bruh.addEventListener('click', function() {
            toggleDateInput(this);
        });
    });
    document.getElementById('sortable').appendChild(newLi);

    data[id] ={
        "startDate": "",
        "endDate": "",
        "daySix": false,
        "startToday": false
    }

    save();
}

function generateRandomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
}

function getNewID() {
    let newNumber = Object.keys(data).length + 1;
    return "item"+newNumber.toString();
}

function deleteItem(element) {
    // Get the parent <li> of the clicked trash icon
    const listItem = element.closest('li');
    const elementID = listItem.querySelector('input[type="radio"]').id;
    
    // Get the parent <ul> that contains the list items
    const list = listItem.parentNode;

    // Check the number of remaining list items
    if (list.children.length > 1) {
        listItem.remove(); // Remove the item if more than one is left
        delete data[elementID];
        save();
    }
}

function toggleDateInput(checkbox) {
    // Find the parent <li> of the checkbox
    const listItem = checkbox.closest('li');

    // Find the date input within the same list item
    const dateInput = listItem.querySelector('.section1 input[type="date"]');

    if(checkbox.checked) {
        var date = getCurrentDate();
        dateInput.value = date;
        dateInput.disabled = true;
    }
    else {
        dateInput.disabled = false;
    }
}

function get_school_days(startMonth, startDay, endMonth, endDay, ignoreSix) {

    const days = calendar.daysTill([startMonth, startDay], [endMonth, endDay], ignoreSix, false);
    return days;

}

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
