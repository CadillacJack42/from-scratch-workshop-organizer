import { getWorkshops } from '../fetch-utils.js';

const workshopDropdown = document.getElementById('workshops-dropdown');
const enrollmentForm = document.getElementById('enroll');

window.addEventListener('load', async() => {
    const shops = await getWorkshops();

    for (const shop of shops) {
        const option = document.createElement('option');
        option.value = shop.id;
        option.textContent = shop.name;
        workshopDropdown.append(option);
    }
});

