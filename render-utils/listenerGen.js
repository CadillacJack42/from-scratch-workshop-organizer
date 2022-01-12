import { deleteParticipant } from '../fetch-utils.js';
import { renderAll } from './render.js';



export const deleteGenerator = (domEl, id) => {
    domEl.addEventListener('click', async() => {
        await deleteParticipant(id);
        await renderAll();
    });
};