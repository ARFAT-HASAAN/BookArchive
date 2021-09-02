const searchBookName = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    // console.log(inputValue);
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}