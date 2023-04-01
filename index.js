

let counteEl = document.getElementById("count-el")

console.log(counteEl)


let count = 0


function increment() {
    count = count + 1
    counteEl.innerText = count
    console.log(count)
}