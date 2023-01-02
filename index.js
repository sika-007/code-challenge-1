//Variable declaration

const btn = document.querySelector('#new-quote')
const quote = document.querySelector(".quote")
const person = document.querySelector(".person")

//Inserting our quote objects into an array
const quoteList = [{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
}, {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney"
}, {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    person: "Steve Jobs"
}, {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    person: "Eleanor Roosevelt"
}, {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    person: "Oprah Winfrey"
}, {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    person: "James Cameron"
}, {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
}, {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa"
}, {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    person: "Franklin D. Roosevelt"
}, {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    person: "Margaret Mead"
}]

//Now we apply the event listener
btn.addEventListener("click", function() {
    const randNum = Math.floor(Math.random() * quoteList.length)
    if (quote.textContent === quoteList[randNum].quote) {
        quote.textContent = "'" + quoteList[randNum - 1].quote + "'"
        person.textContent = quoteList[randNum - 1].person
        console.log(randNum-1)
    } else {
        quote.textContent = "'" + quoteList[randNum].quote + "'"
        person.textContent = quoteList[randNum].person
    }
})