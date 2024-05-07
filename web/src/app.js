/*
*File: index.html
*Author: Orosz Oliver
*Copyright: 2024, Orosz Oliver
*Group: Szoft 1-i-n
*Date: 2024-05-07
*Github: https://github.com/Hiradura/
*Licenc: GNU GPL
*/
const doc = {
    bookBody: document.querySelector("#bookBody"),
}

const state = {
    url: 'http://localhost:8000/books',
}



function getBooks() {
    fetch(state.url)
    .then( response => response.json())
    .then(result => {
        renderBooks(result)
    })
}

function getDataFromForm() {
    state.cim = doc.nameInput.value
    state.szerzo = doc.cityInput.value
    state.ar = doc.salaryInput.value
}

function renderBooks(bookList) {
    
    bookList.forEach(bks => {
        console.log(bks.ár)
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${bks.id}</td>
            <td>${bks.cím}</td>
            <td>${bks.szerző}</td>
            <td>${bks.ár}</td>
            <td>
        `
        doc.bookBody.appendChild(row)
    });
    
}

getBooks()
