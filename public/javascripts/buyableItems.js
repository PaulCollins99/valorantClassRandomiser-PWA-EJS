export function generateBuyableItems() {
    let primary = {
        stinger: {
            name: "stinger",
            cost: 1000,
            rating: 2
        },
        spectre: {
            name: "spectre",
            cost: 1600,
            rating: 1
        },
        bucky: {
            name: "bucky",
            cost: 900,
            rating: 3
        },
        judge: {
            name: "judge",
            cost: 1500,
            rating: 3
        },
        bulldog: {
            name: "bulldog",
            cost: 2100,
            rating: 3
        },
        guardian: {
            name: "guardian",
            cost: 2700,
            rating: 2
        },
        phantom: {
            name: "phantom",
            cost: 2900,
            rating: 1
        },
        vandal: {
            name: "vandal",
            cost: 2900,
            rating: 1
        },
        marshal: {
            name: "marshal",
            cost: 1100,
            rating: 2
        },
        operator: {
            name: "operator",
            cost: 4500,
            rating: 1
        },
        ares: {
            name: "ares",
            cost: 1600,
            rating: 2
        },
        odin: {
            name: "odin",
            cost: 3200,
            rating: 2
        },
    }

    let pistols = {
        classic: {
            name: "classic",
            cost: 0,
        },
        shorty: {
            name: "shorty",
            cost: 200,
        },
        frenzy: {
            name: "frenzy",
            cost: 400,
        },
        ghost: {
            name: "ghost",
            cost: 500,
        },
        sheriff: {
            name: "sheriff",
            cost: 800,
        },
    };

    return {
        primary,
        pistols
    }
}