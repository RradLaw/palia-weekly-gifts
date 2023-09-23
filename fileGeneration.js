function generateString(character) {
    let template = `    "xxxGift1": {
        "name": "",
        "type": "",
        "updated": 0
    },
    "xxxGift2": {
        "name": "",
        "type": "",
        "updated": 0
    },
    "xxxGift3": {
        "name": "",
        "type": "",
        "updated": 0
    },
    "xxxGift4": {
        "name": "",
        "type": "",
        "updated": 0
    },`;
    return template.replaceAll(/xxx/g, character);
}

let characters = [
    "Ashura",
    "Auni",
    "Badruu",
    "Caleri",
    "Chayne",
    "Delaila",
    "Einar",
    "Elouisa",
    "Eshe",
    "Hassian",
    "Hekla",
    "Hodari",
    "Jel",
    "Jina",
    "Kenli",
    "Kenyatta",
    "Nai'O",
    "Najuma",
    "Reth",
    "Sifuu",
    "Tamala",
    "Tau",
    "Tish",
    "Zeki",
];
console.log("{");
for (var i = 0; i < characters.length; i++) {
    console.log(generateString(characters[i]));
}
console.log("}");