let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    "Ashura": ["Channel Catfish", "Acorn", "Stalking Catfish", "Sushi"],
    "Auni": ["Common Bark Cicada", "Cerulean Cicada", "Blueberry", "Celebration Cake"],
    "Badruu": ["Tomato", "Creamy Carrot Soup", "Apple Tree Seed", "Cream of Mushroom Soup"],
    "Caleri": ["Briar Daisy", "Glass Bulb", "Chapaa Onigiri", "Chapaa Masala"],
    "Chayne": ["Congee", "Wheat Seed", "Heat Root", "Green Pearl"],
    "Delaila": ["Calico Koi", "Garden Ladybug", "Stalking Catfish", "Gold Bar"],
    "Einar": ["Spotted Bullhead", "Spineshell Crab", "Shimmerfin", "Cloudfish"],
    "Elouisa": ["Spotted Stinkbug", "Cantankerous Koi", "Leafstalker Mantis", "Rainbow-Tipped Butterfly"],
    "Eshe": ["Grilled Oyster", "Juniper Seed", "Silver Bar", "Bouillabaisse"],
    "Hassian": ["Plant Fiber", "Fabric", "Azure Chapaa Tail", "Giant Kilima Stingray"],
    "Hekla": ["Grilled Meat", "Acorn", "Ramen", "Celebration Cake"],
    "Hodari": ["Muujin Meat", "Flow-Infused Wood", "Loaded Potato Soup", "Bahari Glowbug"],
    "Jel": ["Umbran Carp", "Lunar Fairy Moth", "Indigo Lamprey", "Midnight Paddlefish"],
    "Jina": ["Coral", "Cotton Seed", "Shimmerfin", "Cream of Mushroom Soup"],
    "Kenli": ["Wagon Wheel", "Creamy Carrot Soup", "Sushi", "Palian Onion Soup"],
    "Kenyatta": ["Barracuda", "Acorn", "Chili Oil Dumplings", "Crimson Fangtooth"],
    "Nai'O": ["Wagon Wheel", "Wheat Seed", "Iron Bar", "Steak Dinner"],
    "Najuma": ["Sweet Leaf", "Copper Bar", "Stripeshell Snail", "Silver Bar"],
    "Reth": ["Yellow Perch", "Pickled Onions", "Apple Jam", "Palian Onion Soup"],
    "Sifuu": ["Chapaa Meat", "Standard Arrow", "Cream of Tomato Soup", "Swordfin Eel"],
    "Subira": ["Grilled Mushroom", "Rice", "Long Nosed Unicorn Fish", "Enchanted Pupfish"],
    "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Radiant Sunfish", "Ancient Amber Beetle"],
    "Tau": ["Chapaa Meat", "Golden Salmon", "?", "Apple"],
    "Tish": ["Briar Daisy", "Dawnray", "Pinecone", "Green Pearl"],
    "Zeki": ["Unopened Oyster", "Silk", "Fried Catfish Dinner", "Dari Cloves"],
    








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
                if (fileRead) {
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
                if (fileRead) {
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
                if (fileRead) {
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
                if (fileRead) {
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