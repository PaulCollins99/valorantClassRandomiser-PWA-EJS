let submit = document.getElementById("submitButton")
submit.addEventListener("click", moveOn);

function moveOn () {
    let current = window.location.href

    //control to stop too many players
    if (document.getElementById("inputNumber").value <= 5) {
        window.location.href = current.substring(0, current.length - 1) + "/inputNames/" + document.getElementById("inputNumber").value
        
    } else {
        alert ("Too many players")
    }
}

//######################################## Service Worker ########################################\\

if (navigator.serviceWorker) {
    async function registerServiceWorker() {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.error("Service Worker failed.  Falling back to 'online only'.", e);
        }
    }
    window.addEventListener('load', registerServiceWorker);
}



