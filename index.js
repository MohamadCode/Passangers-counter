let countEl = document.getElementById("count-el")
console.log(countEl)


let count = 0

console.log(count)


function increment() {

    count = count + 1
    countEl.textContent = count
    console.log(count)
}
