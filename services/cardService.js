import axios from 'axios';
    const baseUrl = 'http://kanban-app.test/api';

    export async function getCard(id) {
        let card = {};
        const response = await axios.get(`${baseUrl}/cards/${id}`);
        card = response.data;
        return card;
    }

    export async function updateCard(id, payload) {
        const params = new URLSearchParams(payload).toString()
        const response = await axios.put(`${baseUrl}/cards/${id}`, payload);
        return response;
    }
  
