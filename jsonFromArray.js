var typeJSON = require('./rawData.json');

let errorString = "";

let data = {


    "Ashura": ["Channel Catfish", "Golden Salmon", "Flow-Infused Plank", "Fisherman's Brew"],
    "Auni": ["Common Bark Cicada", "Cerulean Cicada", "Scintillating Centipede", "Apple Pie"],
    "Badruu": ["Rosy Bitterling", "Orange Bluegill", "Apple Tree Seed", "Meaty Stir Fry"],
    "Caleri": ["Grilled Oyster", "Heat Root", "Pinecone", "Bouillabaisse"],
    "Chayne": ["Onion Seed", "Creamy Carrot Soup", "Dragon's Beard Peat", "Green Pearl"],
    "Delaila": ["Calico Koi", "Wheat Seed", "Golden Glory Bee", "Giant Goldfish"],
    "Einar": ["Eyeless Minnow", "Prism Trout", "Vampire Crab", "Stormray"],
    "Elouisa": ["Calico Koi", "Albino Eel", "Spitfire Cicada", "Ancient Amber Beetle"],
    "Eshe": ["Grilled Oyster", "Silk", "Macaron", "Jewelwing Dragonfly"],
    "Hassian": ["Spotted Chapaa Tail", "Chapaa Asada Tacos", "Iron Bar", "Fireworks Arrow"],
    "Hekla": ["Grilled Mushroom", "Largemouth Bass", "Ramen", "Green Pearl"],
    "Hodari": ["Fur", "Heartwood", "Iron Bar", "Firebreathing Dragonfly"],
    "Jel": ["Shell", "Lunar Fairy Moth", "Petit Fives", "Midnight Paddlefish"],
    "Jina": ["Congee", "Duskwing Butterfly", "Shimmerfin", "Cream of Mushroom Soup"],
    "Kenli": ["Grilled Fish", "Garden Ladybug", "Princess Ladybug", "Palian Onion Soup"],
    "Kenyatta": ["Wild Garlic", "Creamy Carrot Soup", "Banded Muujin Mane", "Crimson Fangtooth"],
    "Nai'O": ["Muujin Meat", "Channel Catfish", "Blueberry Bush Seed", "Steak Dinner"],
    "Najuma": ["Wild Garlic", "Copper Bar", "Cream of Tomato Soup", "Blueberry Pie"],
    "Reth": ["Potato", "Ramen", "Raspberry Beetle", "Dari Cloves"],
    "Sifuu": ["Chapaa Meat", "Standard Arrow", "Iron Bar", "Fireworks Arrow"],
    "Subira": ["Congee", "Trout Dinner", "Ancient Amber Beetle", "Chapaa Onigiri"],
    "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Hairy Millipede", "Leafstalker Mantis"],
    "Tau": ["Fried Catfish Dinner", "Unopened Oyster", "Brighteye Butterfly", "Apple"],
    "Tish": ["Ship Fragments", "Acorn", "Apple Pie", "Green Pearl"],
    "Zeki": ["Grilled Fish", "Silk", "Pearl", "Gold Ore"]






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