const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings(loginInput.value);
}

function paintGreetings(username) {
    let date = new Date();
    let currentHour = date.getHours();
    if(currentHour > 4 && currentHour < 12) {
        greeting.innerText = `Good morning, ${username}`;
    } else if (currentHour > 11 && currentHour < 18) {
        greeting.innerText = `Good afternoon, ${username}`;
    } else {
        greeting.innerText = `Hello!, ${username}`;
    }
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}