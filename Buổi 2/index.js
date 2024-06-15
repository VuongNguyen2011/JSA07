// let i = 3

// while(i < 3){
//     console.log("So " + i)
//     //i = i + 1 
//     i++
// }

// do {
//     console.log("So " + i)
//     //i++
// } while (i < 3);


// for (let j = 1; j <= 2; j++) {
//     for (let y = 1; y <= 3; y++) {

//     }
// }


// let arr = ["Chau", "Khang", "Phuc"]
// console.log("arr " + arr)
// console.log("Lenght " + arr.length)
// console.log("Push " + arr.push("Nguyen"))
// console.log("arr " + arr)
// console.log("POP " + arr.pop())
// console.log("arr " + arr)
// console.log("shift " + arr.shift())
// console.log("arr " + arr)


//console.log

let sp1 = {
    Name: "IP 15 Pro Max",
    Price : "30.000.000",
    color : "Đen", 
    camera: 3
}

let sp2 = {
    Name: "IP 16 Pro Max",
    Price : "40.000.000",
    color : "Trắng", 
    camera: 4
}

console.log(sp1)
console.log(sp2)

sp2.option = "Chống nước"
sp2.note = "Bán ế quá"
sp2.Price = "35.000.000"

delete sp2.note
//=========================================
let arr = [sp1, sp2]

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if(arr[i].camera == 4){
        console.log(arr[i].Name)
    }   
    
    if(arr[i].Price == "30.000.000"){
        console.log(arr[i].Name)
    }
}

