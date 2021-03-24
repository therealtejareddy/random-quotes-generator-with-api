const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');

let updateQuote = async () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quote.textContent = data.content;
            author.textContent = '- '+data.author;
        });
};
document.addEventListener('DOMContentLoaded', updateQuote);
btn.addEventListener('click', () => updateQuote());



