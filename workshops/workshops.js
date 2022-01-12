import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';
import { renderParticipant, renderWorkshops } from '../render-utils/render.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsEl = document.getElementById('workshops');

logoutButton.addEventListener('click', () => {
    logout();
});

const check = async() => {
    const shops = await getWorkshops();

    for (const shop of shops) {
        const renderedShop = renderWorkshops(shop);
        workshopsEl.append(renderedShop);
    }
};
check();