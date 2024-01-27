let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {



    "Ashura": [
        "Sapwood Plank",
        "Kilima Catfish",
        "Fish Stew",
        "Trout Dinner"
    ],

    "Auni": [
        "Waterlogged Boot",
        "Garden Mantis",
        "Stripeshell Snail",
        "Celebration Cake"
    ],

    "Badruu": [
        "Carrot Seed",
        "Rice",
        "Blueberry Bush Seed",
        "Cream of Mushroom Soup"
    ],

    "Caleri": [
        "Coral",
        "Heat Root",
        "Silk Thread",
        "Chapaa Masala"
    ],

    "Chayne": [
        "Sundrop Lily",
        "Blueberry Bush Seed",
        "Heat Root",
        "Cream of Mushroom Soup"
    ],

    "Delaila": [
        "Channel Catfish",
        "Clay",
        "Apple",
        "Giant Goldfish"
    ],

    "Einar": [
        "Silver Salmon",
        "Garden Snail",
        "Shimmerfin",
        "Fisherman's Brew"
    ],

    "Elouisa": [
        "Spotted Stinkbug",
        "Inky Dragonfly",
        "Blobfish",
        "Green Pearl"
    ],

    "Eshe": [
        "Leather",
        "Juniper Seed",
        "Silver Bar",
        "Bouillabaisse"
    ],

    "Hassian": [
        "Fur",
        "Cotton",
        "Iron Bar",
        "Steak Dinner"
    ],

    "Hekla": [
        "Oyster Meat",
        "Fried Catfish Dinner",
        "Cream of Mushroom Soup",
        "Green Pearl"
    ],

    "Hodari": [
        "Muujin Meat",
        "Sernuk Noodle Stew",
        "Iron Ore",
        "Firebreathing Dragonfly"
    ],

    "Jel": [
        "Coral",
        "Silk",
        "Banded Muujin Mane",
        "Bluebristle Muujin Mane"
    ],

    "Jina": [
        "Congee",
        "Cotton Seed",
        "Mutated Angler",
        "Apple Pie"
    ],

    "Kenli": [
        "Chapaa Meat",
        "Hearty Vegetable Soup",
        "Trout Dinner",
        "Celebration Cake"
    ],

    "Kenyatta": [
        "Knapweed",
        "Creamy Carrot Soup",
        "Spicy Stir Fry",
        "Bluebristle Muujin Mane"
    ],

    "Nai'O": [
        "Muujin Meat",
        "SpeedyGro Fertilizer",
        "Fried Catfish Dinner",
        "Steak Dinner"
    ],

    "Najuma": [
        "Tomato",
        "Copper Bar",
        "Flow-Infused Plank",
        "Blueberry Pie"
    ],

    "Reth": [
        "Spice Sprouts",
        "Wheat",
        "Cream of Tomato Soup",
        "Cream of Mushroom Soup"
    ],

    "Sifuu": [
        "Copper Ore",
        "Copper Bar",
        "Silver Ore",
        "Silver Bar"
    ],

    "Subira": [
        "Fur",
        "Heat Root",
        "Red-bellied Piranha",
        "Firebreathing Dragonfly"
    ],

    "Tamala": [
        "Emerald Carpet Moss",
        "Garden Millipede",
        "Garden Leafhopper",
        "Fairy Mantis"
    ],

    "Tau": [
        "Common Blue Butterfly",
        "Duskwing Butterfly",
        "Brighteye Butterfly",
        "Rainbow-Tipped Butterfly"
    ],

    "Tish": [
        "Sweet Leaf",
        "Glass Bulb",
        "Apple Pie",
        "Green Pearl"
    ],

    "Zeki": [
        "Silvery Minnow",
        "Golden Salmon",
        "Sashimi",
        "Bouillabaisse"
    ],











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
                if(fileRead) {
                    template = template.replaceAll(/type1/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type1/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                if(fileRead) {
                    template = template.replaceAll(/type2/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type2/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                if(fileRead) {
                    template = template.replaceAll(/type3/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type3/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                if(fileRead) {
                    template = template.replaceAll(/type4/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type4/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}