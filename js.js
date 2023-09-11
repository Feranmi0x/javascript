const newquote = document.querySelector('.quotes');
const newauthor = document.querySelector('.author');
const btn = document.querySelector('.newquote');

const quotes = [
    { quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', author: '-Nelson Mandela' },
    { quote: '"The way to get started is to quit talking and begin doing."', author: '-Walt Disney'},
    { quote: '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking."', author: '-Steve Jobs' },
    { quote: '"The future belongs to those who believe in the beauty of their dreams."', author: '-Eleanor Roosevelt'},
    { quote: '"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough."', author: '-Oprah Winfrey' },
    { quote: '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success."', author: '-James Cameron' },
    { quote: '"You may say Im a dreamer, but Im not the only one. I hope someday youll join us. And the world will live as one."', author: '-John Lennon' },
];

function setQuote() {
    const randomq = Math.floor(Math.random() * quotes.length);
    const randomquotes = quotes[randomq];
    newquote.innerText =  randomquotes.quote;
    newauthor.innerText = randomquotes.author;
}

btn.addEventListener('click', setQuote);