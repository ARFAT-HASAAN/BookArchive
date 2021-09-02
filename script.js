const resultTotal = document.getElementById('result-total')
resultTotal.style.display = 'none'


const searchBookName = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';
    resultTotal.style.display = "none";
    bookContainer.textContent = '';

    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => bookDetails(data))
}

const bookDetails = details => {
    // console.log(details)
    const resultTotal = document.getElementById('result-total');
    resultTotal.style.display = 'block'
    resultTotal.textContent = '';
    const p = document.createElement('p')
    if (details.numFound === 0) {
        p.innerText = `Apni je namer book kojtesen oidoroner kono voi amder kase nei`
        resultTotal.appendChild(p);
    }
    else {
        p.innerText = `You have found ${details.numFound} result`
        resultTotal.appendChild(p);
    }

    details.docs.forEach(livrary => {
        foundBooks(livrary)
    })

}

const bookContainer = document.getElementById('book-Container')
// bookContainer.textContent = '';

const foundBooks = book => {
    console.log(book)

    const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    console.log(url);
    const div = document.createElement('div')
    div.classList.add('col')

    div.innerHTML = `
                <div class="card">
                <img src="${url}" class="card-img-top" alt="">
                <div class="card-body">
                    <h6 class="">Books Name:<span class="fw-normal"> ${book.title} </span></h6>
                    <h6 class="">Author Name:<span class="fw-normal"> ${book.author_name} </span></h6>
                    <h6 class="">Publisher Name:<span class="fw-normal"> ${book.publisher} </span></h6>
                    <h6 class="">First publish date:<span class="fw-normal"> ${book.first_publish_year} </span></h6>
                </div>
            </div>
        `
    bookContainer.appendChild(div)
}





