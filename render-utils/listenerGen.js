import { deleteParticipant } from '../fetch-utils.js';



export const deleteGenerator = (domEl, id) => {
    domEl.addEventListener('click', async() => {
        await deleteParticipant(id);
    });
};