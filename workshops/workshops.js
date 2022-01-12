import { checkAuth, logout } from '../fetch-utils.js';
import { renderAll } from '../render-utils/render.js';

checkAuth();

const logoutButton = document.getElementById('logout');


logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    await renderAll();
});