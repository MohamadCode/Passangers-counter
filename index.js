
let saveEl = document.getElementById("save-el")
let counteEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    counteEl.innerText = count
}



function save() {
    entry += " -"
    saveEl.innerText = entry``
    console.log(count)
}



