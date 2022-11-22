function newRequirement() {
  $("#appBody").replaceWith(`
        <div id="appBody" class="container">
            <form>
                <div class="form-group">
                    <label for="uid">Unique I.D.</label>
                    <input id="uid" class="form-control" type="text" placeholder="AI-${
                      Math.floor(Math.random() * 9999998) + 1000000
                    }" readonly>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="text">text</label>
                    <textarea class="form-control" id="text" rows="3" placeholder="The text of the requirement"></textarea>
                </div>
                <div class="form-group">
                    <label for="source-document">Source Document</label>
                    <textarea class="form-control" id="source-document" placeholder=" The name of the document that contains the requirement"> </textarea>
                </div>
                <div class="form-group">
                <label for="deliverable">Deliverable</label>
                <select class="form-control" id="deliverable">
                </select>
                <button id="add-deliverable-button" class="btn btn-secondary">Add a deliverable</button>
            </div>
                <input class="btn btn-primary" type="submit" value="Save" id="save-button">
                <input class="btn btn-danger" type="reset" value="Clear">
            </form>
        </div> 
    `);

  $("#save-button").on("click", function () {
    alert("entry saved");
    location.reload();
  });

  $("#add-status-button").on("click", function () {
    alert("Loading status request form");
    newRequirement();
  });
}

function loadRequirements() {
  $("#appBody").replaceWith(`
        <div id="appBody" class="container">
            <form>
                <div class="form-group">
                    <label for="requirements">Requirements</label>
                    <select class="form-control" id="requirements">
                        <option></option>
                    </select>
                </div>
                <input onclick="openRequirement()" id="load-button" class="btn btn-primary" value="Open">
            </form>
        </div> 
    `);

  for (let i = 0; i < db_requirements.length; i++) {
    let { uid, name } = db_requirements[i];
    $("#requirements").append(`<option value=${i}>${uid} : ${name}</option>`);
  }
}

function sortAsc(data) {
  alert(`table contents are now sorted by ${data} in ascending order`);
  tabularView();
}

function sortDesc(data) {
  alert(`table contents are now sorted by ${data} in descending order`);
  tabularView();
}

function formatDate(date, month, year) {
  let Month = parseInt(month) < 10 ? `0${month}` : month;
  let Date = parseInt(date) < 10 ? `0${date}` : date;
  return `${year}-${Month}-${Date}`;
}

function openRequirement() {
  let index = document.getElementById("requirements").value;
  let {
    uid,
    name,
    text,
    sourceDocument,
    locationInSourceDocument,
    sourcePage,
    sourceParagraph,
    clientReference,
    clientPage,
    clientParagraph,
    DeliverableId,
  } = db_requirements[index];

  $("#appBody").replaceWith(`
    <div id="appBody" class="container">
        <form>
            <div class="form-group">
                <label for="uid">Unique I.D.</label>
                <input id="uid" class="form-control" type="text" placeholder="${uid}" readonly>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <textarea class="form-control" id="text" rows="3""></textarea>
            </div>
            <div class="form-group">
                <label for="source-document">Source Document</label>
                <div>
                    <label for="source-document-page">Source Document page</label>
                    <input id="source-document-page" class="form-control" type="number" value="${sourcePage}" readonly>
                    
                    <label for="source-document-para">Source Document paragraph</label>
                    <input id="source-document-para" class="form-control" type="number" value="${sourceParagraph}" readonly>
                <div>
            </div>
            <div class="form-group">
                <label for="client-reference">Client Reference</label>
                <div>
                    <label for="client-reference-page">Client Reference page</label>
                    <input id="client-reference-page" class="form-control" type="number" value="${clientPage}" readonly>
                    
                    <label for="client-reference-para">Client Reference paragraph</label>
                    <input id="client-reference-para" class="form-control" type="number" value="${clientParagraph}" readonly>
                <div>
            </div>
            <div class="form-group">
                <label for="source-document">Source Document</label>
                // Dropdown
            </div>
            <input class="btn btn-primary" type="submit" value="Save" id="save-button">
            <input class="btn btn-danger" type="button" value="Delete" id="delete-button">
        </form>
    </div> 
    `);

  $("#name").val(name);
  // $("#name").value = name;
  $("#text").val(text);
  $("#source-document").val(sourceDocument);
  $("#deliverable").val(DeliverableId);

  $("#save-button").on("click", function () {
    alert(`${uid} : ${name} has been updated.`);
    location.reload();
  });
  $("#delete-button").on("click", function () {
    if (confirm(`Confirm deletion of ${uid} : ${name}`) === true) {
      alert(`${uid} : ${name} has been deleted`);
      location.reload();
    } else {
      alert(`Delete request of ${uid} : ${name} been cancelled`);
    }
  });
}

function tabularView() {
  $("#appBody").replaceWith(`
    <div id="appBody">
        <form class="container">
            <div class="row">
                <div class="col">
                    <label for="sort">Sort By</label>
                    <select class="form-control" id="sort"><option></option></select>
                    <div class="btn-group" role="group">
                        <button id="sort-asc-button" class="btn btn-secondary">ascending</button>
                        <button id="sort-desc-button" class="btn btn-secondary">descending</button>
                    </div>
                </div>
            </div><br>
        </form>
        <table id="tabView" class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">uid</th>
                    <th scope="col">name</th>
                    <th scope="col">text</th>
                    <th scope="col">source document</th>
                    <th scope="col">deliverable</th>

                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    `);

  for (let i = 0; i < db_requirements.length; i++) {
    var { uid, name, text, source_document, deliverable } = db_requirements[i];
    var row = `
        <tr>
            <th>${uid}</th>
            <td>${name}</td>
            <td>${text}</td>
            <td>${source_document}</td>
            <td>${deliverable}</td>
            
        </tr>`;
    $("tbody").append(row);
  }

  for (let i = 0; i < db_sortOptions.length; i++) {
    $("#sort").append(
      `<option value="${db_sortOptions[i]}") }>${db_sortOptions[i]}</option>`
    );
  }

  $("#sort-asc-button").on("click", function () {
    sortAsc($("#sort").val());
  });
  $("#sort-desc-button").on("click", function () {
    sortDesc($("#sort").val());
  });
}

function init() {
  loadRequirements();
  $("#new-requirement-button").on("click", newRequirement);
  $("#open-requirement-button").on("click", loadRequirements);
  $("#tab-requirement-button").on("click", tabularView);
  $("#open").on("click", loadRequirements);
  $("#new").on("click", newRequirement);
  $("#tab").on("click", tabularView);
}

window.addEventListener("load", init, false);
