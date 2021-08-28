const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = data => {

    const qouteElement = document.getElementById('quote');
    qouteElement.innerText = data.quote;
}
