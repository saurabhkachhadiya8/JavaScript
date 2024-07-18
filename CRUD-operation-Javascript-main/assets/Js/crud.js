
let data = [
    {
        id: 1, name: "Sumit", email: "sumit@gmail.com"
    },
    {
        id: 2, name: "Sujal", email: "sujal@gmail.com"
    },
    {
        id: 3, name: "Krina", email: "krina@gmail.com"
    }
]
function readall() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");
    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";
    objectdata.map(record => (
        elements +=
        `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
            <button class="edit" onclick={edit(${record.id})}>Edit</button>
            <button class="delete" onclick={delet(${record.id})}>Delete</button>
        </td>
    </tr>`
    ));


    tabledata.innerHTML = elements;
}


function delet(id) {
    data = data.filter(rec => rec.id !== id);
    readall();


}
function create() {
    var form = document.querySelector(".create-form").style.display = "block";
    var form = document.querySelector(".add").style.display = "none";


}


function add() {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;


    var newObj =
    {
        id: 4, name: name, email: email
    };
    data.push(newObj);
    var form = document.querySelector(".create-form").style.display = "none";
    var form = document.querySelector(".add").style.display = "block";
    document.querySelector(".name").value = "";
    document.querySelector(".email").value = "";
    readall();
}


function edit(id) {

    document.querySelector('.update-form').style.display = "block";
    var obj = data.find(rec => rec.id == id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.id').value = obj.id;
}


function update() {
    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;
    var index = data.findIndex(rec => rec.id === id);
    data[index] = { id, name, email };
    readall();
    document.querySelector(".update-form").style.display = "none";
}
