
let saveEl = document.getElementById("save-el")
let counteEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    counteEl.textContent = count 
    

}



function save() {
    let entry = count + " - "
    saveEl.textContent += entry 
    counteEl.textContent = 0
    count = 0
    console.log(count)
}



