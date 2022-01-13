import { updateStudentEnrollment, getWorkshops, allowDrop, drop, drag, deleteParticipant } from '../fetch-utils.js';

const workshopsEl = document.getElementById('workshops');


export const renderWorkshops = (workshop) => {
    const workShopContainer = document.createElement('div');

    workShopContainer.addEventListener('dragover', (e) => {
        allowDrop(e);
    });

    workShopContainer.addEventListener('drop', async(e) => {
        const studentId = drop(e);
        await updateStudentEnrollment(studentId, workshop.id);
        await renderAll();
    });
    
    const workShopNameEl = document.createElement('h3');
    
    const workShopStudentsEl = document.createElement('div');

    workShopNameEl.textContent = workshop.name;

    for (const student of workshop.students) {
        const studentEl = renderParticipant(student);
        studentEl.draggable = true;

        studentEl.addEventListener('dragstart', (e) => {
            drag(e, student.id);
        });
        workShopStudentsEl.append(studentEl);
    }

    workShopContainer.append(workShopNameEl, workShopStudentsEl);

    return workShopContainer;
};

export const renderParticipant = (student) => {
    const studentContainer = document.createElement('div');

    studentContainer.addEventListener('click', async(e) => {
        e.preventDefault();
        await deleteParticipant(student.user_id);
        await renderAll();
    });

    const studentNameEl = document.createElement('p');

    studentNameEl.textContent = student.name;
    studentContainer.append(studentNameEl);

    return studentContainer;
};

export const renderAll = async() => {
    workshopsEl.textContent = '';
    const shops = await getWorkshops();

    for (const shop of shops) {
        const renderedShop = renderWorkshops(shop);
        workshopsEl.append(renderedShop);
    }
};