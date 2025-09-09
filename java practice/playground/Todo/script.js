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
        div.innerHTML = `<p>${obj.text}</p>
            <div>
            <button class = "deleteBtn">Delete</button>
            <button>Edit</button>`;
            
            let deleteBtn = div.querySelector('.deleteBtn');
            
            deleteBtn.addEventListener('click',()=>{
                console.log(obj.id);
            })
            todoContainer.append(div);
    });
    console.log(response);

}

async function postData() {

    let taskValue = taskInput.value;

    let objData = {
        text : taskValue.trim()
    }

    let response = await fetch(API,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(objData)

    });

    if (response.status === 201) {
        fetchData();
    }
    
}

fetchData();
