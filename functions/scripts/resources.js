const db_actionItems = new Map();

function newActionItem() {
    let form = document.getElementById("form-container");
    let uid = 'AI-' + (Math.floor(Math.random() * 999999) + 100000);
    let dateCreated = new Date();

    form.innerHTML = `
        <div class="form-group">
            <label for="uid">Unique I.D.</label>
            <input id="uid" class="form-control" type="text" placeholder=${uid} readonly>
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="name">Title</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="name">Pay Rate</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="date-assigned">Availability Calendar</label>
            <input id="date-assigned" class="form-control" type="date">
        </div>
        <div class="form-group">
            <label for="status-description">List of Skills</label>
            <textarea class="form-control" id="list-of-skills" rows="3" placeholder="A short list of skills, include skill name and skill level."></textarea>
        </div>
        <input class="btn btn-primary" type="submit" value="Save">
        <input class="btn btn-danger" type="reset" value="Delete">
        `;
}

function loadActionItems() {
    let form = document.getElementById("form-container");
    form.innerHTML = `
    <div class="form-group">
        <label for="resources">Resource Assigned</label>
        <select class="form-control" id="resources">
            <option></option>
            <option value="R1">'R-136789', 'Sari Ajina'</option>
            <option value="R2">'R-144577', 'Jonathan Chua'</option>
            <option value="R3">'R-734257', 'Mrunal Prakash Gavali'</option>
            <option value="R4">'R-835510', 'Alondra Gonzalez'</option>
            <option value="R5">'R-482946', 'Jeel Prakashkumar Patel'</option>
            <option value="R6">'R-270087', 'Parth Savaj'</option>
        </select>
    </div>
    <input class="btn btn-primary" type="submit" value="Load">`
}

function openActionItem() {
    let actionItem = document.getElementById("resources").value;
}

function init() {
    document.getElementById("new-resource-button").addEventListener("click", newActionItem, false);
    document.getElementById("open").addEventListener("click", loadActionItems, false);
    document.getElementById("load-button").addEventListener("click", openActionItem, false);
}

window.addEventListener("load", init, false);