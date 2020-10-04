const url = "https://www.mathaugaard.dk/devops-starter-1.0.1/api/person/"
function getPersons() {
    return fetch(url + "all")
        .then(handleHttpErrors)
}

function getPerson(id){
    return fetch(url + "id/" + id)
    .then(handleHttpErrors);
}

function addPerson(person) {
    const options = makeOptions("POST", person);
    
    return fetch(url, options)
        .then(handleHttpErrors);
}

function editPerson(person) {
    const options = makeOptions("PUT", person);
    let id = person.id;

    return fetch(url + "id/" + id, options)
        .then(handleHttpErrors);
}

function deletePerson(id) {
    const options = makeOptions("DELETE");

    return fetch(url + "id/" + id, options)
        .then(handleHttpErrors);
}

const personFacade = {
    getPersons,
    getPerson,
    addPerson,
    editPerson,
    deletePerson
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}



export default personFacade;  