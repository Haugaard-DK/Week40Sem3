import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
const jokes = jokeFacade.getJokes();
let jokeList = jokes.map(joke => "<li>" + joke + "</li>").join("\n");
document.getElementById("jokes").innerHTML = jokeList;


document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let joke = document.getElementById("field").value;
  const jokeById = jokeFacade.getJokeById(joke);
  document.getElementById("p").innerHTML = jokeById;
});

document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault();
  jokeFacade.addJoke(document.getElementById("field2").value);
});


/* JS For Exercise-2 below */
function getjokeFromApi() {
  let url = 'https://studypoints.info/jokes/api/jokes/period/hour';

  fetch(url).then(res => res.json()).then(data => {
    let quote = data.joke

    document.getElementById("p2").innerHTML = quote;
  });
}

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();

  getjokeFromApi();
  setInterval(getjokeFromApi, 3600000);
});



/* JS For Exercise-3 below */
//Show all users (in a table)
function fetchUsers() {
  userFacade.getUsers()
    .then(users => {
      const userRows = users.map(user => `
      <tr>
        <td>${user.id}</td>
        <td>${user.age}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
      </tr>`
      );
      const userRowsAsString = userRows.join("");
      document.getElementById("allUserRows").innerHTML = userRowsAsString;
    })
}
fetchUsers();

//Show a single user, given an ID
document.getElementById("fetch_User").addEventListener("submit", function (e) {
  e.preventDefault();
  let id = document.getElementById("userId").value;
  userFacade.getUser(id)
    .then(user => {
      const userRow = `
      <tr>
        <td>${user.id}</td>
        <td>${user.age}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
      </tr>`;
      document.getElementById("UserP").innerHTML = userRow;
    })
    .catch(err => {
      console.log(err);
      if(err.status){
        err.fullError.then(e => document.getElementById("pError").innerHTML = e.msg);
      } else {
        console.log("Network error");
      }
    })
})

//Add user
document.getElementById("addUserForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let user = {
    "age": document.getElementById("addUserAge").value,
    "name": document.getElementById("addUserName").value,
    "gender": document.getElementById("addUserGender").value,
    "email": document.getElementById("addUserEmail").value
  }
  userFacade.addUser(user)
  .catch(err => {
    console.log(err);
    if(err.status){
      err.fullError.then(e => document.getElementById("pError").innerHTML = e.msg);
    } else {
      console.log("Network error");
    }
  });
  setTimeout(fetchUsers, 500);
})

//edit user
document.getElementById("editUserForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let user = {
    "id": document.getElementById("editUserId").value,
    "age": document.getElementById("editUserAge").value,
    "name": document.getElementById("editUserName").value,
    "gender": document.getElementById("editUserGender").value,
    "email": document.getElementById("editUserEmail").value
  }
  userFacade.editUser(user)
  .catch(err => {
    console.log(err);
    if(err.status){
      err.fullError.then(e => document.getElementById("pError").innerHTML = e.msg);
    } else {
      console.log("Network error");
    }
  });
  setTimeout(fetchUsers, 500);
})

//delete user
document.getElementById("deleteUserForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let id = document.getElementById("deleteUserId").value;
  userFacade.deleteUser(id)
  .catch(err => {
    console.log(err);
    if(err.status){
      err.fullError.then(e => document.getElementById("pError").innerHTML = e.msg);
    } else {
      console.log("Network error");
    }
  });
  setTimeout(fetchUsers, 500);
})



/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



