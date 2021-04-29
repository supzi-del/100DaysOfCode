// Collection Of Quotes
const quotes = [{
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: ` -Kent Beck`
}, {
    quote: `Talk is cheap. Show me the code.`,
    author: ` -Linus Torvalds`
}, {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: ` -Harold Abelson`
}, {
    quote: `Truth can only be found in one place: the code.`,
    author: ` -Robert C`
}, {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: ` -Muhammad Waseem`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: ` -Steve Jobs`
}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: ` -Alan Kay`
}, {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: ` -C.A.R. Hoare`
}, {
    quote: `i am committed to push my branch to the master.`,
    author: ` -Halgurd Hussein`
}, {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: ` -Ming Song`
}, ]


// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})




//copy to clipboard

document.getElementById("clipboard").addEventListener("click", copy_quote);

function copy_quote() {
    var copyText = document.getElementById("quote");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}