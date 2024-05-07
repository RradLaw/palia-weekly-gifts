let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Ashura": ["Sapwood Plank", "Juniper Seed", "Reth's Century Egg", "Fisherman's Brew"],
    "Auni": ["Common Bark Cicada", "Proudhorned Stag Beetle", "Stripeshell Snail", "Celebration Cake"],
    "Badruu": ["Carrot", "Orange Bluegill", "Loaded Potato Soup", "Azure Stonehopper"],
    "Caleri": ["Wild Ginger", "Kilima Redfin", "Bahari Glowbug", "Bouillabaisse"],
    "Chayne": ["Sundrop Lily", "Creamy Carrot Soup", "Pearl", "Cream of Mushroom Soup"],
    "Delaila": ["Calico Koi", "SpeedyGro Fertilizer", "Apple Tree Seed", "Gold Bar"],
    "Einar": ["Eyeless Minnow", "Red-bellied Piranha", "Shimmerfin", "Radiant Sunfish"],
    "Elouisa": ["Spotted Stinkbug", "Cantankerous Koi", "Gossamer Veil Moth", "Ancient Amber Beetle"],
    "Eshe": ["Fur", "Silk", "Silver Ore", "Bouillabaisse"],
    "Hassian": ["Grilled Meat", "Standard Arrow", "Azure Chapaa Tail", "Steak Dinner"],
    "Hekla": ["Oyster Meat", "Largemouth Bass", "Ramen", "Enchanted Pupfish"],
    "Hodari": ["Stone Brick", "Heartwood", "Iron Ore", "Firebreathing Dragonfly"],
    "Jel": ["Waterlogged Boot", "Muujin Mane", "Black Sea Bass", "Green Pearl"],
    "Jina": ["Coral", "Cotton", "Radiant Sunfish", "Void Ray"],
    "Kenli": ["Grilled Fish", "Hearty Vegetable Soup", "Pan Fried Dumplings", "Kenli's Carp"],
    "Kenyatta": ["Sundrop Lily", "Cytthroat Trout", "Leafstalker Mantis", "Meaty Stir Fry"],
    "Nai'O": ["Spice Sprouts", "Carrot", "Apple Tree Seed", "Steak Dinner"],
    "Najuma": ["Clay", "Copper Bar", "Iron Ore", "Blueberry Pie"],
    "Reth": ["Chapaa Meat", "Creamy Carrot Soup", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
    "Sifuu": ["Stone Brick", "Oily Anchovy", "Iron Bar", "Gold Ore"],
    "Subira": ["Copper Ore", "Silver Ore", "Mutated Angler", "Spitfire Cicada"],
    "Tamala": ["Fur", "Silk", "Azure Stonehopper", "Fairy Mantis"],
    "Tau": ["Calico Koi", "Leather", "Carrot", "Shimmerfin"],
    "Tish": ["Coral", "Stuffed Cabbage Rolls", "Pinecone", "Blueberry Pie"],
    "Zeki": ["Grilled Oyster", "Golden Salmon", "Zeki's Flyer", "Dari Cloves"]
    








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