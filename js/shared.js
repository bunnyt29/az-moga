function GetUrlRoot() {
    return 'http://localhost:5000/'
}

function GetToken() {
    return localStorage.getItem('token');

}

function SetToken(token) {
    localStorage.setItem('token', token);
}

function GetUser() {
    return JSON.parse(localStorage.getItem('user') || '')
}

function SetUser(user) {
    localStorage.setItem('user', JSON.stringify(user))

}

function GetHobbies() {
    return fetch(GetUrlRoot() + 'hobby').then(res => res.json())
}