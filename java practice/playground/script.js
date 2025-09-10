let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('.addBtn');
let todoContainer = document.querySelector('.todoContainer');
let para = document.querySelector('p');

let API = "https://68c04fdc0b196b9ce1c3f7f3.mockapi.io/api/v1/Todos";

addBtn.addEventListener('click', postData);

async function fetchData() {
    let response = await fetch(API);
    let data = await response.json();

    if (data) {
        todoContainer.innerHTML = ' ';
    }

    data.forEach(obj => {
        let div = document.createElement('div')
        div.className = 'todo';
        div.innerHTML = `<p class = "paraText">${obj.text}</p>
          <input id="editInput" type="text" placeholder="Enter your task" value = '${obj.text}'>
            <div>
            <button class = "deleteBtn">Delete</button>
            <button class = "editBtn">Edit</button>
            <button class = "saveBtn">Save</button>
            `;

        let deleteBtn = div.querySelector('.deleteBtn');
        let editBtn = div.querySelector('.editBtn');
        let saveBtn = div.querySelector('.saveBtn');
        let paraText = div.querySelector('.paraText');
        let editInput = div.querySelector('#editInput');


        deleteBtn.addEventListener('click', () => {
            deleteData(obj.id);
        })

        editBtn.addEventListener('click', () => {
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline';
            paraText.style.display = 'none';
            editInput.style.display = 'inline';
        })
        saveBtn.addEventListener('click', async function () {
            let editValue = editInput.value;
            let response = await updateData(obj.id, editValue);
            saveBtn.style.display = 'none';
            if (response.status === 200) {
               await fetchData();
            }
            editBtn.style.display = 'inline';
            paraText.style.display = 'inline';
            editInput.style.display = 'none';
        })


        todoContainer.append(div);
    });

}

async function postData() {

    let taskValue = taskInput.value;

    let objData = {
        text: taskValue.trim()
    }

    let response = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData)

    });

    if (response.status === 201) {
        fetchData();
        taskInput.value = ' ';
    }

}
async function updateData(id, value) {
    let objData = {
        text: value.trim()
    }

    let response = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData)

    });
    return response;
}

async function deleteData(id) {
    let response = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    })
    if (response.status === 200) {
        fetchData();
    }
}




fetchData();
