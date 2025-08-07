let listContainer = document.querySelector(".listContainer");
let addBtn = document.querySelector(".addBtn");
let addInput = document.querySelector("#addInput");

let list = [];



function renderList() {
    listContainer.innerHTML = " ";
    list.map(obj => {
        let divElement = document.createElement("div");
        divElement.classList.add("list");
        divElement.innerHTML = `
        <p>${obj.text}</p>
    `
        let buttonElem = document.createElement("button");
        buttonElem.innerText = "❌";
        divElement.append(buttonElem);
        buttonElem.onclick = () => {
            handelRemoveList(obj.id);
        }
        listContainer.append(divElement);
    })

}
renderList(list);

function handelAddList() {
    let obj = {
        id: Date.now(),
        text: addInput.value,
    }
    // list.push(obj);
    list.unshift(obj);
    renderList(list);
    addInput.value = " ";
}

function handelRemoveList(id) {
   
   let filterList = list.filter(obj => {
        return obj.id !== id
    })
    list = filterList;
    renderList(list);


}
addBtn.addEventListener('click', handelAddList)