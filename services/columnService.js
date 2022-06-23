import axios from 'axios';
    const baseUrl = 'http://kanban-app.test/api';
    /* 
     *  Fetch list of columns
     *  returns columns[].
    */
    export async function getColumns() {
        let columns = [];
        const response = await axios.get(`${baseUrl}/columns`);
        columns = response.data;
        return columns;
    }
  
