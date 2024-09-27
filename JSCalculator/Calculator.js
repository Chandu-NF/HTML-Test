function dis(val){
    document.getElementById("result").value += val
}

function displayFunction(event){
    if(event.key =="0" || event.key == "1"
       || event.key =="2" || event.key == "3"
       || event.key =="4" || event.key == "5"
       || event.key =="6" || event.key == "7"
       || event.key =="8" || event.key == "9"
       || event.key =="+" || event.key == "-"
       || event.key =="*" || event.key == "/"
     ){
        document.getElementById("result").value += event.key
    }
}

function clr(){
    document.getElementById("result").value = " "
}

function cal(){
    let x = document.getElementById("result").value 
    document.getElementById("result").value = eval(x)
}

let colorsList = ["blue", "red", "yellow", "white", "whitesmoke"]
let colorIndex = 0

function changeBgColor(){
    document.getElementById("myId").style.background = colorsList[colorIndex]
    colorIndex = (colorIndex + 1) % colorsList.length
    }
