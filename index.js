
let saveEl = document.getElementById("save-el")
let counteEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    counteEl.innerText = count
}



function save() {
    let entry = count +g " - "
    saveEl.innerText += entry

    console.log(count)
}



