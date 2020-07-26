var list = document.getElementById('list');
function addTodo() {
    var todo_item = document.getElementById('todo_item');
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    //edit btn
    var editBtn = document.createElement('button');
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class","btn");
    editBtn.setAttribute("onclick","editItem(this)");

    //dlt btn
    var delBtn = document.createElement('button');
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute('class','btn');
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.appendChild(delText);
     
    li.appendChild(delBtn);
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    list.appendChild(li);
    todo_item.value = "";
    // console.log(li);
}
function editItem(text) {
    var value = text.parentNode.firstChild.nodeValue;
    // var editValue = prompt('Enter Edit Value',value);
    var editValue = prompt('Enter Edit Value',value);
    text.parentNode.firstChild.nodeValue = editValue;

}
function delItem(text) {
    text.parentNode.remove();
    //console.log(e);
}
function delAll() {
    alert('do you want to clear all??')
    list.innerHTML = "";
}