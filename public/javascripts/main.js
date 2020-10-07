'use strict';
import {
    User
} from './user.js';
import {
    generateBuyableItems
} from './buyableItems.js';
import {
    getPrimary
} from './buyLogic.js';
import {
    getPistol
} from './buyLogic.js';
import {
    getArmour
} from './buyLogic.js';
import {
    powers
} from './buyLogic.js';

//////////////////info from frontend/////////////////
let playerCount = 3;
let playerNames = ["Paul", "Andrew", "Jack"];
let playerCharacters = ["Jett", "Brimstone", "Omen"];
let playerCash = [2000, 4000, 5000];
let playerEcos = [false, false, false];
let rebuy = [false, false, false];
let pistolRound = false;
let eco = false;
//////////////////////////////////////////////////////

function populatePlayersArray(playerCount, playerNames, playerCharacters, playerCash, playerEcos, rebuy) {
    let players = [];
    for (let i = 0; i < playerCount; i++) {
        players[i] = new User(playerNames[i], playerCharacters[i], playerCash[i], playerEcos[i], rebuy[i]);
        // console.log(playerNames[i] + " : " + playerCharacters[i])
    };
    return players;
}

function generateBuy(buyableItems) {
    let players = populatePlayersArray(playerCount, playerNames, playerCharacters, playerCash, playerEcos, rebuy);
    let count = 0;
    let output = []
    players.forEach(player => {
        let playerBuy = {
            Name: player.name,
            Primary: "",
            Pistol: "",
            Armour: "",
            Power1: "",
            Power2: "",
            Power3: "",
        }
        count++;
        if (player.rebuy) {
            let power = powers(player);
            let powerCount = 0;
            for (let key in power) {
                powerCount++
                let powerName = "Power" + count;
                playerBuy[powerName] = power[key].name + " - " + power[key].quantity;
            }
        } else if (pistolRound) {
            playerBuy.Pistol = getPistol(player, buyableItems);
            let power = powers(player);
            let powerCount = 0;
            for (let key in power) {
                powerCount++
                let powerName = "Power" + count;
                playerBuy[powerName] = power[key].name + " - " + power[key].quantity;
            }
        } else if (eco || player.eco) {
            if (player.cash > 3000) {
                playerBuy.Armour = getArmour(eco, pistolRound, player);
                playerBuy.Pistol = getPistol(player, buyableItems);
            } else if (player.cash > 2000) {
                playerBuy.Pistol = getPistol(player, buyableItems);
            } else {
                playerBuy.Pistol = "classic";
            }
        } else {
            playerBuy.Armour = getArmour(eco, pistolRound, player);
            playerBuy.Primary = getPrimary(player, buyableItems);
            playerBuy.Pistol = getPistol(player, buyableItems);

            let power = powers(player);
            let powerCount = 0;
            for (let key in power) {
                powerCount++
                let powerName = "Power" + powerCount;
                playerBuy[powerName] = power[key].name + " - " + power[key].quantity;
            }
        }
        output.push(playerBuy)
    });
    document.getElementById("inputs").style.display = "none"
    document.getElementById("outputs").style.display = "block"

    fillOutput(output)

}

function fillOutput (output) {
    let primarys = document.getElementsByClassName("primary")
    let secondarys = document.getElementsByClassName("secondary")
    let armours = document.getElementsByClassName("armour")
    let power1s = document.getElementsByClassName("power1")
    let power2s = document.getElementsByClassName("power2")
    let power3s = document.getElementsByClassName("power3")

    for (let i = 0; i < primarys.length; i++) {
        primarys[i].textContent = output[i].Primary
        secondarys[i].textContent = output[i].Pistol
        armours[i].textContent = output[i].Armour
        power1s[i].textContent = output[i].Power1
        power2s[i].textContent = output[i].Power2
        power3s[i].textContent = output[i].Power3
    }
}
function generateGo() {
    playerCount = localStorage.getItem("playerCount")
    let arrayPlayers = JSON.parse(localStorage.getItem("players"))
    playerNames = []
    playerCharacters = []
    arrayPlayers.forEach(p => {
        playerNames.push(p.name)
        playerCharacters.push(p.character)
    })
    pistolRound = false;
    eco = false;
    playerCash = []

    for (let i = 0; i < playerCount; i++) {
        playerCash.push(document.getElementById("player" + (i + 1)).value)
    }

    let buyableItems = generateBuyableItems();
    generateBuy(buyableItems);
    
}

document.getElementById("generate").addEventListener("click", generateGo)
