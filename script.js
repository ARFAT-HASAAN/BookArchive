// error section hided 
const resultTotal = document.getElementById('result-total')
resultTotal.style.display = 'none'

// book container id 
const bookContainer = document.getElementById('book-Container')

// search book  by name with function  
const searchBookName = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';

    // error section hided second time 
    resultTotal.style.display = "none";

    // clear book container 
    bookContainer.textContent = '';

    // book name url 
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => bookDetails(data))
}

// capture books details 
const bookDetails = details => {

    // arror section showing 
    const resultTotal = document.getElementById('result-total');
    resultTotal.style.display = 'block'
    resultTotal.textContent = '';

    // arror secton condition 
    const p = document.createElement('p')
    if (details.numFound === 0) {
        p.innerText = `no result found`
        resultTotal.appendChild(p);
    }
    else {
        p.innerText = `You have found ${details.numFound} result`
        resultTotal.appendChild(p);
    }

    // splcie books array 
    const splice = details.docs.splice(0, 20)
    // calling foundbook function 
    foundBooks(splice)
}

// foundbook functon 
const foundBooks = books => {

    // apply forEach on books aray 
    books.forEach(book => {

        // books photos url 
        const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`

        // create div for books detaisl 
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
    })
}





