function main() {
    var btn = document.getElementById("goodToGo");
    btn.onclick = function () {
        var rdBtns = document.getElementsByName("choice");
        for (var i = 0; i < rdBtns.length; i++) {
            if (rdBtns[i].checked)
                if (rdBtns[i].value == "display") {
                    display();
                }
                else if (rdBtns[i].value == "insert") {
                    insert();
                }
                else if (rdBtns[i].value == "update") {
                    update();
                }
                else if (rdBtns[i].value == "delete") {
                    del();
                }
        }
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        var genderBtns = document.getElementsByName("gender");
        for (var i = 0; i < genderBtns.length; i++) {
            if (genderBtns[i].checked)
                genderBtns[i].checked = false;
        }
    }
}

function display() {
    console.log("in display");
    $.ajax({
        type: "GET",
        url: "http://localhost:3030/api/contacts/",
        success: (data) => {
            document.getElementById("textHere").innerHTML = JSON.stringify(data);
        }
    });
}

function insert() {
    console.log("in insert");

    var n = document.getElementById("name").value;
    var num = document.getElementById("number").value;

    var gen;
    var genderBtns = document.getElementsByName("gender");
    for (var i = 0; i < genderBtns.length; i++) {
        if (genderBtns[i].checked)
            gen = genderBtns[i].value;
    }

    var dd = document.getElementById("bloodGroup");
    var bg = dd.options[dd.selectedIndex].value;

    $.ajax({
        type: "POST",
        url: "http://localhost:3030/api/contacts/",
        contentType: "application/json",
        data: "{\n\t\"name\": \"" + String(n) + "\",\n    \"number\": \"" + String(num) + "\",\n    \"gender\": \"" + String(gen) + "\",\n    \"bloodGroup\": \"" + String(bg) + "\"\n}",
        success: (data) => {
            document.getElementById("textHere").innerHTML = JSON.stringify(data);
        }
    })
}

function update() {
    // to be changed
}

function del() {
    // to be changed
}