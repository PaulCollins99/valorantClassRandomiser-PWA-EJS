export function User(name, character, cash, eco, rebuy) {
    this.name = name;
    this.character = getCharacter(character);
    this.cash = cash;
    this.eco = eco;
    this.rebuy = rebuy;

    function getCharacter(characterName) {
        if (characterName == "Breach") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 700,
                    quantity: 2,
                },
                cPower: {
                    name: "cPower",
                    cost: 100,
                    quantity: 1,
                }
            };
        } else if (characterName == "Brimstone") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 300,
                    quantity: 1,
                },
                ePower: {
                    name: "ePower",
                    cost: 100,
                    quantity: 3,
                },
                cPower: {
                    name: "cPower",
                    cost: 100,
                    quantity: 3,
                }
            };
        } else if (characterName == "Cypher") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 100,
                    quantity: 2,
                },
                cPower: {
                    name: "cPower",
                    cost: 200,
                    quantity: 2,
                }
            };
        } else if (characterName == "Jett") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 100,
                    quantity: 2,
                },
                cPower: {
                    name: "cPower",
                    cost: 100,
                    quantity: 3,
                }
            };
        } else if (characterName == "Omen") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 200,
                    quantity: 1,
                },
                cPower: {
                    name: "cPower",
                    cost: 100,
                    quantity: 2,
                }
            };
        } else if (characterName == "Phoenix") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 200,
                    quantity: 2,
                },
                cPower: {
                    name: "cPower",
                    cost: 200,
                    quantity: 1,
                }
            };
        } else if (characterName == "Raze") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 200,
                    quantity: 2,
                },
                cPower: {
                    name: "cPower",
                    cost: 200,
                    quantity: 1,
                }
            };
        } else if (characterName == "Reyna") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 100,
                    quantity: 4,
                },
                cPower: {
                    name: "cPower",
                    cost: 200,
                    quantity: 2,
                }
            };
        } else if (characterName == "Sage") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 100,
                    quantity: 2,
                },
                cPower: {
                    name: "cPower",
                    cost: 400,
                    quantity: 1,
                }
            };
        } else if (characterName == "Nova") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 100,
                    quantity: 2,
                },
                cPower: {
                    name: "cPower",
                    cost: 300,
                    quantity: 1,
                }
            };
        } else if (characterName == "Viper") {
            character = {
                qPower: {
                    name: "qPower",
                    cost: 200,
                    quantity: 1,
                },
                cPower: {
                    name: "cPower",
                    cost: 100,
                    quantity: 2,
                }
            };
        }
        return character;
    }
}