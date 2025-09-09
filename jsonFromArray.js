let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Congee", "Striped Sturgeon", "Fish Stew", "Elderwood Pie"],
  "Auni": ["Common Blue Butterfly", "Proudhorned Stag Beetle", "Stripeshell Snail", "Blood Beetle"],
  "Badruu": ["Rainbow Trout", "Creamy Carrot Soup", "Pumpkin Pie", "Cream of Mushroom Soup"],
  "Caleri": ["Wild Ginger", "Kilima Redfin", "Tinfin", "Hypnotic Moray"],
  "Chayne": ["Knapweed", "Wheat Seed", "Dragon's Beard Peat", "Dari Cloves"],
  "Delaila": ["Cantankerous Koi", "Wheat Seed", "Honey", "Giant Goldfish"],
  "Einar": ["Striped Dace", "Spineshell Crab", "Flow-Infused Plank", "Void Ray"],
  "Elouisa": ["Oyster Meat", "Cerulean Cicada", "Piksii Floatfish", "Green Pearl"],
  "Eshe": ["Grilled Oyster", "Fish Stew", "Yellowfin Tuna", "Emerald Ogopuu Scale"],
  "Hassian": ["Plant Fiber", "Sernuk Noodle Stew", "Ogopuu Scale", "Waveback Ogopuu Scale"],
  "Hekla": ["Crystal Lake Lotus", "Brightshroom", "Cream of Mushroom Soup", "Green Pearl"],
  "Hodari": ["Stone Brick", "Heartwood", "Proudhorned Sernuk Antlers", "Firebreathing Dragonfly"],
  "Jel": ["Umbran Carp", "Lunar Fairy Moth", "Banded Muujin Mane", "Bean Burger"],
  "Jina": ["Shell", "Cotton", "Bacon-Stuffed Mushrooms", "Apple Pie"],
  "Kenli": ["Grilled Oyster", "Striped Chapaa Tail", "Steak Dinner", "Iron Bar"],
  "Kenyatta": ["Barracuda", "Creamy Carrot Soup", "Spicy Crab Fried Rice", "Majiri-of-War"],
  "Nai'O": ["Spice Sprouts", "Fish Stew", "Iron Bar", "Steak Dinner"],
  "Najuma": ["Copper Ore", "Garden Snail", "Blueberry", "Blueberry Pie"],
  "Reth": ["Sernuk Meat", "Spicy Pepper", "Flowtato", "Palian Onion Soup"],
  "Sifuu": ["Chapaa Meat", "Oily Anchovy", "Whitestone Slab", "Slowdown Arrow"],
  "Subira": ["Wheat", "Loaded Potato Soup", "Piksii Floatfish", "Angelfish"],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Toadstool Floatfish", "Long Nosed Unicorn Fish"],
  "Tau": ["Trout Dinner", "Grilled Fish", "Flow-Infused Plank", "Grilled Meat"],
  "Tish": ["Shell", "Samara", "Silk Thread", "Green Pearl"],
  "Zeki": ["Unopened Oyster", "Golden Salmon", "Platinum Chad", "Elder Shmole Spore"]
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