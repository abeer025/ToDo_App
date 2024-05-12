///* To do app *///
// get value from user using input
// create para in div with js
// append to in pera using get div html
// create buttn by js
// name of delete and add 
// every para delete should have btn

var grandParent = document.getElementById("grand-parent")
var inputGroup = document.getElementById("input-group")
var parent = document.getElementById("parent");
var inp = document.getElementById("inp");

function del(delBtn) {
        console.log(delBtn.parentNode);
        delBtn.parentElement.remove();
}

function delAll(Button) {
        parent.innerHTML = "";
        inp.value = "";
}

function edt(button) {
        console.log(button.parentNode.childNodes[0]);
        var newText = prompt("Enter new text:");
        if (newText !== null) {
            button.parentNode.childNodes[0].nodeValue = newText;
        }
    }
    
function addElement() {
        var pera = document.createElement("p");
        var text = document.createTextNode(inp.value);
        pera.appendChild(text);
        
        
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        editBtn.className = "btn btn-outline-dark btn-sm btn-primary" 
        editBtn.setAttribute("onclick", "edt(this)");

        var delBtn = document.createElement("button");
        var deletText = document.createTextNode("Delete");
        delBtn.appendChild(deletText);
        delBtn.className = "btn btn-outline-dark btn-sm btn-danger" 
        delBtn.onclick = function() {
                del(this);
            };
        
        pera.appendChild(delBtn); 
        pera.appendChild(editBtn);
        parent.appendChild(pera); 
        console.log(pera)
}
