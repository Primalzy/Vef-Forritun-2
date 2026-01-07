function ai() {
    for (let i = 0; i < 5; i++){
        var number = Math.floor(Math.random() * 3);
        if (number < 1) {
            console.log("scissors")
        }
        else if (number < 2) {
            console.log("paper")
        }
        else {
            console.log("rock")
        }
    };
}

const rock = document.getElementById("rock")
rock.innerText = "rock"
rock.addEventListener("click", () => {
    alert("you picked rock")
})

const paper = document.getElementById("paper")
paper.innerText = "paper"
paper.addEventListener("click", () => {
    alert("you picked paper")
})

const scissors = document.getElementById("scissors")
scissors.innerText = "scissors"
scissors.addEventListener("click", () => {
    alert("you picked scissors")
})