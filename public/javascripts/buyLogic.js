// New primary logic

export function getPrimary(player, buyableItems) {
    let minimumBuy = 900
    if (player.cash >= minimumBuy) {
        let availableGuns = [];
        let gunToBuy = "";

        let tier = getRandomTier();

        for (let key in buyableItems.primary) {
            if (player.cash >= buyableItems.primary[key].cost && buyableItems.primary[key].rating == tier) {
                availableGuns.push(buyableItems.primary[key].name);
            }
        }

        while (availableGuns.length == 0) {
            tier = getRandomTier();

            for (let key in buyableItems.primary) {
                if (player.cash >= buyableItems.primary[key].cost && buyableItems.primary[key].rating == tier) {
                    availableGuns.push(buyableItems.primary[key].name);
                }
            }
        }
        let choice = availableGuns.length * Math.random() >> 0;
        gunToBuy = availableGuns[choice];
        player.cash -= buyableItems.primary[gunToBuy].cost
        return gunToBuy;
    } else {
        return "Not Enough for Primary"
    }



    function getRandomTier() {
        let tier = 0
        let tierRand = 10 * Math.random() >> 0;

        if (tierRand >= 9) {
            tier = 3
        } else if (tierRand >= 7) {
            tier = 2
        } else if (tierRand >= 0) {
            tier = 1
        }

        return tier
    }
}

export function getPistol(player, buyableItems) {
    let availableGuns = [];
    let gunToBuy = "";
    if (player.cash == 0) {
        gunToBuy = "classic"
    } else {
        for (let key in buyableItems.pistols) {
            if (player.cash > buyableItems.pistols[key].cost) {
                availableGuns.push(buyableItems.pistols[key].name);
            }
        }

        if (availableGuns.length == 1) {
            gunToBuy = "classic";
        } else {
            let index = availableGuns.length * Math.random() << 0;
            gunToBuy = availableGuns[index]
            player.cash -= buyableItems.pistols[gunToBuy].cost
        }
    }
    return gunToBuy;
}

export function getArmour(eco, pistol, player) {
    if (eco) {
        player.cash -= 400;
        return "Half Armour";
    } else if (pistol) {
        return "No Armour";
    } else if (player.cash >= 1000) {
        player.cash -= 1000;
        return "Full Armour";
    } else if (player.cash >= 400) {
        player.cash -= 400;
        return "Half Armour";
    } else {
        return "No Armour"
    }
}

export function powers(player) {
    let output = {};
    let chance = 10 * Math.random() << 0;
    if (chance <= 8) {
        if (player.cash >= player.character[key].cost) {
            let number = player.character[key].quantity * Math.random() << 0;
            while (number * player.character[key].cost >= player.cash) {
                number = player.character[key].quantity * Math.random() << 0;
            }
            if (number == 0) {
                number += 1;
            }
            player.cash -= number * player.character[key].cost;
            output[player.character[key].name] = {
                "name": player.character[key].name,
                "quantity": number
            };
        }
    }
    return output;
}