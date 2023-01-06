// document.getElementById("count").innerText = 5

// let firstBatch= 5
// let secondBatch =7

let countNum = document.getElementById("count")
console.log(countNum)

// let count = firstBatch + secondBatch
let count = 0

function increment(){

    count = count + 5
    countNum.innerText = count
    // console.log(count)

}

let datatext =  document.getElementById("data")

function save(){
    let countStr = count + " - "

    datatext.textContent+= countStr
    countNum.innerText =0
    count = 0

    

    // console.log(datatext)
}

// document.getElementById("count").innerText = count

// 2.20 mins done!!!