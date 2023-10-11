let streakEl = document.getElementById("streak-el")
let countEl = document.getElementById("count-el")
console.log(countEl)


let count = 0

console.log(count)


function increment() {

    count += 1
    countEl.textContent = count
}


function save() {

    let Streaksave = count + "  - "

    streakEl.textContent += Streaksave
    countEl.textContent = 0
    count = 0
}