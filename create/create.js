import { getWorkshops, createParticipant } from '../fetch-utils.js';

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

enrollmentForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = new FormData(enrollmentForm);
    const studentName = data.get('student-name');
    const classId = data.get('workshops');
    
    const student = {
        name: studentName,
        workshop_id: classId
    };
    await createParticipant(student);

    enrollmentForm.reset();
});