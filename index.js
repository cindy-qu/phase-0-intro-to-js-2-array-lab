// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = [...cats, name];
}


function prependCat(name) {
    const prependCats = [name, ...cats];
}

function removeLastCat(name) {
    cats.slice(2)
}