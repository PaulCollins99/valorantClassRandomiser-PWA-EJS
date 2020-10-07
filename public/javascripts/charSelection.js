let submit = document.getElementById("submitButton")
submit.addEventListener("click", main);

function main() {
    let selects = document.getElementsByClassName("classSelect")
    let emptyValue = false;
    let selectsArray = []
    for (let i = 0; i < selects.length - 1; i++) {
        if (selects[i].value == "") {
            emptyValue = true
        }
        selectsArray.push(selects[i].value)
    }

    let names = document.getElementsByClassName("nameInput")
    let emptyName = false;
    console.log(names.length)
    let namesArray = []
    for (let i = 0; i < names.length; i++) {
        if (names[i].value == "") {
            emptyName = true
        }
        namesArray.push(names[i].value)
    }

    if (emptyValue == false && emptyName == false) {
        console.log("Valid input")
        if (checkIfDuplicateExists(namesArray) || checkIfDuplicateExists(selectsArray)) {
            console.log("remove duplicates");
        } else {
            console.log("No Duplicates");
            let playersOutput = []
            for (let i = 0; i < names.length; i++) {
                playersOutput.push({
                    name: names[i].value,
                    character: selects[i].value
                })
            }
            localStorage.setItem("players", JSON.stringify(playersOutput))
            localStorage.setItem("playerCount", playersOutput.length)

            let current = window.location.href
            window.location.href = current.substring(0, current.length - 13) + "/main/" + playersOutput.length + "&" + JSON.stringify(playersOutput)

        }
    } else if (emptyValue == true) {
        console.log("Characters missing")
    } else {
        console.log("Player name missing")
    }
}

function checkIfDuplicateExists(array) {
    return new Set(array).size !== array.length
}