var db_actionItems = new Map();
var db_resources = new Map();

function actionItems() {
    let jumbotron = document.getElementById("jumbotron");
    let form = document.getElementById("form-section");
    let uid = 'AI-' + (Math.floor(Math.random() * 999999) + 100000);
    let name = "Order Part#7833";
    let description = "The memory used for the protoboards are insufficient for the task."
    let dateCreated = new Date(2022, 7, 24);
    let dateAssigned = new Date(2022, 8, 28);

    jumbotron.innerHTML = `<div class="container">
        <h1 class="display-4">Action-Items</h1>
        <p>This is the main banner for the Action-Items work area</p>
        <p><button id="new-action-item-button" class="btn btn-primary btn-lg" role="button">Create a new Action Item >></button></p>
        </div>`;
    
    form.innerHTML = `<form id="action-items-form">
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
            <input id="date-created" class="form-control" type="date">
        </div>
        <div class="form-group">
            <label for="date-assigned">Date Assigned</label>
            <input id="date-assigned" class="form-control" type="date">
        </div>
        <div class="form-group">
            <label for="resources">Resource Assigned</label>
            <select class="form-control" id="resources">
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
        <hr>
        </form>`;
    
    document.getElementById("resources").addEventListener("mouseup", () => { document.getElementById("date-assigned").innerHTML = new Date(); }, false );
}



function init() {
    document.getElementById("action-items-button").addEventListener("click", actionItems, false);
}

window.addEventListener("load", init, false);