let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
    {
        profileUrl: "https://images.unsplash.com/photo-1734189743286-a39af55f48c3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Riya gupta",
        email: "riya123@gmail.com",
    },
    {
        profileUrl: "https://t4.ftcdn.net/jpg/02/97/24/51/360_F_297245133_gBPfK0h10UM3y7vfoEiBC3ZXt559KZar.jpg",
        username: "divyanshu takur",
        email: "dd123@gmail.com",
    },
    {
        profileUrl: "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
        username: "lovepreet singh",
        email: "lapu@gmail.com",
    }
]

function renderUsers(arr){
    userContainer.innerHTML = '';
    if(arr.length == 0){

        userContainer.innerHTML = `<p>User is not available</p> `
        // console.log("hello");
        
    }

    let resultArray = arr.map(function (obj) {
        // console.log(obj.email);
        let { profileUrl, username, email } = obj; 
        let divElement = document.createElement("div");
        divElement.className = "userItem"
        divElement.innerHTML = `<div class="userItem">
                   <div class="image">
                    <img src="${profileUrl}"
                        alt="error loading image">
                        
                    </div>
                    <div class="userDetails">
                        <h3>${username}</h3>
                        <p>${email}</p>
                   </div>
                </div>`
        userContainer.append(divElement);
    })

}
renderUsers(users);
function handleSearch(e) {
    let searchValue = e.target.value;
    let filteredUsers = users.filter(obj => {
        return (
            obj.username.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )

    })
renderUsers(filteredUsers);

}

searchInput.addEventListener('input', handleSearch);