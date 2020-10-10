/**
 * Handle click events on the submit button, make sure all of the characters
 * have a name and a selection that are valid, and then save this to local storage
 * and put on the UI. (Remove Duplicates).
 */
const main = () => {
    // Read the selected characters and names
    const selects = document.getElementsByClassName("classSelect")
    const names = document.getElementsByClassName("nameInput")

    // Make sure every selection is valid and has a name, if it is, push it
    let validCharacters = []
    Array.from(selects).map((element, index) => {
        if ((element && element.value !== "") && 
          (names[index] && names[index].value !== "")) {
            validCharacters.push({
                name: names[index].value,
                character: selects[index].value
            })
        }
    })

    localStorage.setItem("players", JSON.stringify(validCharacters))
    localStorage.setItem("playerCount", validCharacters.length)

    let currentWindow = window.location.href
    window.location.href = currentWindow.substring(0, currentWindow.length - 13) + "/main/" + validCharacters.length + "&" + JSON.stringify(validCharacters)
}

let submit = document.getElementById("submitButton")
submit.addEventListener("click", main);
