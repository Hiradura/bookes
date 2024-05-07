
const doc = {
    bookBody: document.querySelector("#bookBody"),
}

const state = {
    url: 'http://localhost:8000/books',
}


function getDataFromForm() {
    state.cím = doc.nameInput.value
    state.szerző = doc.cityInput.value
    state.ár = doc.salaryInput.value
}

function getBooks() {
    fetch(state.url)
    .then( response => response.json())
    .then(result => {
        renderBooks(result)
    })
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
