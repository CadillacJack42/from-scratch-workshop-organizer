export const renderWorkshops = (workshop) => {
    const workShopContainer = document.createElement('div');
    const workShopNameEl = document.createElement('h3');
    const workShopStudentsEl = document.createElement('div');

    workShopNameEl.textContent = workshop.name;

    for (const student of workshop.students) {
        const studentEl = renderParticipant(student);
        workShopStudentsEl.append(studentEl);
    }

    workShopContainer.append(workShopNameEl, workShopStudentsEl);

    return workShopContainer;
};

export const renderParticipant = (student) => {
    const studentContainer = document.createElement('div');
    const studentNameEl = document.createElement('p');

    studentNameEl.textContent = student.name;
    studentContainer.append(studentNameEl);

    return studentContainer;
};