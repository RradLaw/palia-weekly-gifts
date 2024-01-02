var typeJSON = require('./rawData.json');

let errorString = "";

let data = {
    "Ashura": ["Silver Salmon", "Acorn", "Fried Catfish Dinner", "Apple Pie"],
    "Auni": ["Common Field Cricket", "Cerulean Cicada", "Scintillating Centipede", "Celebration Cake"],
    "Badruu": ["Tomato", "SpeedyGro Fertilizer", "Cream of Mushroom Soup", "Blueberry Bush Seed"],
    "Caleri": ["Briar Daisy", "Heat Root", "Chapaa Onigiri", "Dari Cloves"],
    "Chayne": ["Potato", "Rice", "Blueberry", "Cream of Mushroom Soup"],
    "Delaila": ["Rainbow Trout", "HarvestBoost Fertilizer", "Blueberry Bush Seed", "Giant Goldfish"],
    "Einar": ["Worm", "Yellow Perch", "Mottled Gobi", "Radiant Sunfish"],
    "Elouisa": ["Duskray", "Cerulean Cicada", "Scarlet Koi", "Cloudfish"],
    "Eshe": ["Leather", "Bluefin Tuna", "Macaron", "Palian Onion Soup"],
    "Hassian": ["Plant Fiber", "Sernuk Noodle Stew", "Iron Bar", "Dispel Arrow"],
    "Hekla": ["Briar Daisy", "Brightshroom", "Black Sea Bass", "Green Pearl"],
    "Hodari": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Iron Ore", "Firebreathing Dragonfly"],
    "Jel": ["Umbran Carp", "Silk", "Oysters Akwinduu", "Midnight Paddlefish"],
    "Jina": ["Congee", "Brightshroom", "Brighteye Butterfly", "Dari Cloves"],
    "Kenli": ["Wagon Wheel", "Creamy Carrot Soup", "Loaded Potato Soup", "Celebration Cake"],
    "Kenyatta": ["Sernuk Antlers", "Creamy Carrot Soup", "Proudhorned Sernuk Antlers", "Crimson Fangtooth"],
    "Nai'O": ["Muujin Meat", "Rice Seed", "Corn", "Steak Dinner"],
    "Najuma": ["Wild Garlic", "Copper Bar", "Flow-Infused Plank", "Silver Bar"],
    "Reth": ["Carrot", "Heat Root", "Blueberry", "Cream of Mushroom Soup"],
    "Sifuu": ["Sernuk Meat", "Elder Sernuk Antlers", "Silver Ore", "Slowdown Arrow"],
    "Subira": ["Glow Worm", "Iron Ore", "Energised Piranha"],
    "Tamala": ["Emerald Carpet Moss", "Heat Root", "Hairy Millipede", "Dari Cloves"],
    "Tau": ["Sernuk Meat", "Cantankerous Koi", "Carrot", "Akwinduu Chapaa"],
    "Tish": ["Briar Daisy", "Acorn", "Apple Pie", "Blueberry Pie"],
    "Zeki": ["Unopened Oyster", "Golden Salmon", "Flow-Infused Plank", "Dari Cloves"]








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