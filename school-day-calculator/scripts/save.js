window.data = {};

window.addEventListener("load",() => {
    let savedData = window.localStorage.getItem('saveData');
    if (savedData == null) {
        window.localStorage.clear();
        window.data = {
            "item1": {
                "startDate": "",
                "endDate": "",
                "daySix": false,
                "startToday": false
            }
        }
    } else{
        load();
        for (let id in data){
            addElement(id, data[id]);
        }
        document.getElementById('item1').checked = true;
        handleInputChange(document.getElementById('item1'));
    }
})

function save(){
    window.localStorage.setItem('saveData', JSON.stringify(data));
}

function load() {
    let saveData = window.localStorage.getItem('saveData');
    if (saveData != null) {
        data = JSON.parse(saveData);
    }
}

function addElement(id, dataObject){
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
                            <h6>Ignore Day 6</h6>
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
    dateInputs.forEach((input, index) => {
        input.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the date changes
        });
        if (index == 0){ // StartDate
            if(dataObject["startToday"]){
                input.value = dataObject["startDate"];
            }else{
                input.value = getCurrentDate()
                input.disabled = true;
            }
        }
        else{
            input.value = dataObject["endDate"];
        }
    });

    let checkboxes = newLi.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            handleInputChange(this); // Call handleInputChange when the checkbox changes
        });
        if (index == 0){ // day six
            checkbox.checked = dataObject["daySix"];
        }
        else{
            checkbox.checked = dataObject["today"];
        }
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
}

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}