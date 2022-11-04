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
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="3" placeholder="A short description of the Action Item."></textarea>
        </div>
        <div class="form-group">
            <label for="date-created">Date Created</label>
            <input id="date-created" class="form-control" type="text" value="${dateCreated.toLocaleDateString()}" readonly>
        </div>
        <div class="form-group">
            <label for="date-assigned">Date Assigned</label>
            <input id="date-assigned" class="form-control" type="date">
        </div>
        <div class="form-group">
            <label for="action-itemss">Action Item Assigned</label>
            <select class="form-control" id="action-itemss">
                <option></option>
                <option>'R-136789', 'Sari Ajina'</option>
                <option>'R-144577', 'Jonathan Chua'</option>
                <option>'R-734257', 'Mrunal Prakash Gavali'</option>
                <option>'R-835510', 'Alondra Gonzalez'</option>
                <option>'R-482946', 'Jeel Prakashkumar Patel'</option>
                <option>'R-270087', 'Parth Savaj'</option>
            </select>
        </div>
        <div class="form-group">
            <label for="expected-completion-date">Expected Completion Date</label>
            <input id="expected-completion-date" class="form-control" type="date">
        </div>
        <div class="form-group">
            <label for="actual-completion-date">Actual Completion Date</label>
            <input id="actual-completion-date" class="form-control" type="date">
        </div>
        <div class="form-group">
            <label for="status">Status</label>
            <select class="form-control" id="status">
                <option></option>
                <option>Open</option>
                <option>Closed</option>
                <option>In Progress</option>
                <option>Hold</option>
                <option>Complete</option>
            </select>
        </div>
        <div class="form-group">
            <label for="status-description">Status Description</label>
            <textarea class="form-control" id="status-description" rows="3" placeholder="A short description of the Action Item's status as of the last update."></textarea>
        </div>
        <div class="form-group">
            <label for="update-date">Update Date</label>
            <input id="uupdate-date" class="form-control" type="text" placeholder="" readonly>
        </div>
        <input class="btn btn-primary" type="submit" value="Save">
        <input class="btn btn-danger" type="reset" value="Delete">
        `;
}

function loadActionItems() {
    let form = document.getElementById("form-container");
    form.innerHTML = `
    <div class="form-group">
        <label for="action-items">Action Item Assigned</label>
        <select class="form-control" id="action-items">
            <option></option>
            <option value="AI1">'AI-736789', 'Replace Antenna Module#455'</option>
            <option value="AI2">'AI-774577', 'Optimize Tracking Software'</option>
            <option value="AI3">'AI-434151', 'Improve Load Speeds'</option>
            <option value="AI4">'AI-835510', 'Replace Process for Logic Board #77'</option>
            <option value="AI5">'AI-482946', 'Change Memory Supplier'</option>
            <option value="AI6">'AI-270087', 'Resolve Process Supply Chain'</option>
        </select>
    </div>
    <input class="btn btn-primary" type="submit" value="Load">`
}

function openActionItem() {
    let actionItem = document.getElementById("action-items").value;
}

function init() {
    document.getElementById("new-action-item-button").addEventListener("click", newActionItem, false);
    document.getElementById("open").addEventListener("click", loadActionItems, false);
    document.getElementById("load-button").addEventListener("click", openActionItem, false);
}

window.addEventListener("load", init, false);