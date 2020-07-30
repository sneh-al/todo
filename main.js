let myList = document.querySelector("#todoList");
let li
let add = document.querySelector("#add");
add.addEventListener('click', addItem);
let rem = document.querySelector("#remove");
rem.addEventListener('click', removeItem);



function addItem() {
    let input = document.getElementById('input');
    let item = input.value;
    let textNode = document.createTextNode(item)

    if (item === '') {
        return false;
        alert('Add somthing')
    } else {
        li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        let lable = document.createElement('lable');

        myList.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(lable);
        lable.appendChild(textNode);
        setTimeout(() => {
            li.className = 'visual';
        }, 1);

        input.value = '';

    }

}

function removeItem() {
    li = myList.children;


    for (let index = 0; index < li.length; index++) {

        while (li[index] && li[index].children[0].checked) {
            myList.removeChild(li[index])

        }


    }


}