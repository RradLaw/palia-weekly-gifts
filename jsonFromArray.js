var typeJSON = require('./rawData.json');

let errorString = "";

let data = {



    "Ashura": ["Grilled Fish", "Kilima Catfish", "Crab Pot Pie", "Fisherman's Brew"],
    "Auni": ["Unopened Oyster", "Garden Mantis", "Firebreathing Dragonfly", "Apple Pie"],
    "Badruu": ["Carrot Seed", "Wheat", "Blueberry Bush Seed", "Meaty Stir Fry"],
    "Caleri": ["Emerald Carpet Moss", "Pickled Carrots", "Silk Thread", "Dari Cloves"],
    "Chayne": ["Onion Seed", "Juniper Seed", "Blueberry", "Palian Onion Soup"],
    "Delaila": ["Rainbow Trout", "Wheat Seed", "Shepp's Pie", "Gold Bar"],
    "Einar": ["Worm", "Ribbontail Ray", "Mottled Gobi", "Radiant Sunfish"],
    "Elouisa": ["Duskray", "Inky Dragonfly", "Blobfish", "Giant Goldfish"],
    "Eshe": ["Fur", "Bluefin Tuna", "Silver Bar", "Palian Onion Soup"],
    "Hassian": ["Sernuk Antlers", "Chapaa Asada Tacos", "Proudhorned Sernuk Antlers", "Slowdown Arrow"],
    "Hekla": ["Grilled Meat", "Bahari Bream", "Black Sea Bass", "Green Pearl"],
    "Hodari": ["Leather", "Copper Bar", "Stonefish", "Spitfire Cicada"],
    "Jel": ["Coral", "Freshwater Eel", "Vampire Crab", "Green Pearl"],
    "Jina": ["Wagon Wheel", "Brightshroom", "Radiant Sunfish", "Rainbow-Tipped Butterfly"],
    "Kenli": ["Spotted Chapaa Tail", "Ramen", "Trout Dinner", "Meaty Stir Fry"],
    "Kenyatta": ["Crystal Lake Lotus", "Cytthroat Trout", "Proudhorned Sernuk Antlers", "Fairy Mantis"],
    "Nai'O": ["Wagon Wheel", "Kilima Catfish", "Bahari Pike", "Steak Dinner"],
    "Najuma": ["Tomato Plant Seed", "Copper Bar", "Apple", "Blueberry Pie"],
    "Reth": ["Carrot", "Ramen", "Apple Jam", "Dari Cloves"],
    "Sifuu": ["Stone Brick", "Elder Sernuk Antlers", "Iron Bar", "Swordfin Eel"],
    "Tamala": ["Fur", "Garden Millipede", "Hairy Millipede", "Fairy Mantis"],
    "Tau": ["Common Field Cricket", "Silver Salmon", "Grilled Oyster", "Shimmerfin"],
    "Tish": ["Sapwood Plank", "Samara", "Pearl", "Blueberry Pie"],
    "Zeki": ["Silvery Minnow", "Fish Stew", "Fish Tacos", "Bouillabaisse"]


};
let outputStr = "{\n";
for (const key in data) {
    outputStr += generateString(key, data[key]) + "\n";
}
outputStr = outputStr.substring(0, outputStr.length - 2)
outputStr += "\n}";
console.log(outputStr);
console.log(errorString);

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "type1",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "type2",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "type3",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "type4",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                template = template.replaceAll(/type1/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                template = template.replaceAll(/type2/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                template = template.replaceAll(/type3/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                template = template.replaceAll(/type4/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}