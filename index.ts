// Import stylesheets
import './style.css';
import { User } from './user';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Decorators Demo</h1>`;
appDiv.innerHTML += `Reference code for <a href='https://rneto.es/blog/decoradores-typescript/' target='_blank'>Decorators in TypeScript</a>.`;

let user = new User('Rafael');
user.synchronize('source');